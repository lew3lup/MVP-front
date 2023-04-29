import { Reducer } from "@reduxjs/toolkit";
import { StateSchemaKey, StoreWithManager } from "app/providers/store/config/StateSchema";
import { ReactNode, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer;
};

export interface DynamicModuleLoaderProps {
  children: ReactNode;
  reducers: ReducersList;
  removeOnUnmount?: boolean;
}

export const DynamicModuleLoader = (props: DynamicModuleLoaderProps) => {
  const { children, reducers, removeOnUnmount = true } = props;
  const store = useStore() as StoreWithManager;
  const dispatch = useDispatch();

  useEffect(() => {
    Object.entries(reducers).forEach(([stateKey, reducer]) => {
      store.reducerManager.add(stateKey as StateSchemaKey, reducer);
      dispatch({ type: `@INIT ${stateKey} reducer` });
    });

    return () => {
      if (removeOnUnmount) {
        Object.entries(reducers).forEach(([stateKey]) => {
          store.reducerManager.remove(stateKey as StateSchemaKey);
          dispatch({ type: `@DESTROY ${stateKey} reducer` });
        });
      }
    };
  }, []);

  return <>{children}</>;
};
