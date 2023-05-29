import cn from "classnames";
import {
  blockchainReducer,
  getBlockchainConfig,
  getBlockchainLoading,
  getBlockchainNetworks,
  getBlockchainSignature,
  getMintingSignature,
} from "entities/Blockchain";
import { getUserData, getUserInited } from "entities/User";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import contractABI from "shared/api/contractABI.json";
import Logo from "shared/assets/logo.svg";
import { DynamicModuleLoader, ReducersList } from "shared/components";
import { useAppDispatch } from "shared/hooks";
import { Button, Card, Loader, Select } from "shared/ui";
import Web3 from "web3";
import { switchNetwork } from "../../model/services/switchNetwork";
import styles from "./TokenIssuancePage.module.scss";
import { IContract } from "shared/api/IContract";

export interface TokenIssuancePageProps {
  className?: string;
}

const reducers: ReducersList = { blockchain: blockchainReducer };

const TokenIssuancePage = (props: TokenIssuancePageProps) => {
  const { className } = props;
  const dispatch = useAppDispatch();

  const user = useSelector(getUserData);
  const _inited = useSelector(getUserInited);
  const networks = useSelector(getBlockchainNetworks);
  const isLoading = useSelector(getBlockchainLoading);

  const [selected, setSelected] = useState<string>();

  // Генерируем массив сетей для передачи в Select
  const selectorNetworks = useMemo(() => {
    if (networks.length) {
      return networks.map((network) => ({
        value: String(network.chainId),
        content: network.name,
      }));
    }
  }, [networks]);

  const onChangeSelect = useCallback((value: string) => {
    setSelected(value);
  }, []);

  // Тут говнокод
  const onButtonClick = useCallback(async () => {
    if (!user?.address) {
      alert("can't get eth-address");
      return;
    }

    if (!user?.isVerified) {
      alert("user is not verified");
      return;
    }

    const network = networks.find((network) => String(network.chainId) === selected);

    if (!network) {
      alert("network is not found");
      return;
    }

    // переключаем сеть в метамаске, если её нет, то добавляем
    await switchNetwork(network);
    // получаем подпись с бэка
    const response = await dispatch(getMintingSignature());
    if (typeof response.payload === "string") {
      alert(`Error! ${response.payload}`);
      return;
    }
    const signature = response.payload?.data;

    if (!signature) {
      alert("can't get signature!");
      return;
    }

    if (!window.ethereum) {
      alert("Metamask is not connected");
      return;
    }

    // создаём объёкт для работы с контрактом
    const web3 = new Web3(window.ethereum as any);
    const contract = new web3.eth.Contract(contractABI, network.contractAddress);
    await contract.methods.mint(signature).send({ from: user.address });
  }, [networks, dispatch, selected, user]);

  useEffect(() => {
    // Получаем список сетей
    dispatch(getBlockchainConfig());
  }, []);

  useEffect(() => {
    // Устанавливаем первую сеть по дефолту
    if (selectorNetworks && selectorNetworks.length && !selected) {
      setSelected(() => selectorNetworks[0].value);
    }
  }, [selectorNetworks, selected]);

  if (isLoading || !_inited) {
    return (
      <div className={cn(styles.root, className, {})}>
        <Loader />
      </div>
    );
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeOnUnmount={false}>
      <div className={cn(styles.root, className, {})}>
        <Card>
          <div>
            <Logo />
            <p className={styles.title}>Token issuance</p>
          </div>
          <Select className={styles.input} onChange={onChangeSelect} options={selectorNetworks} />
          <Button className={styles.input} onClick={onButtonClick}>
            Create
          </Button>
        </Card>
      </div>
    </DynamicModuleLoader>
  );
};

export default TokenIssuancePage;
