"use client";

import { useReducer, useEffect } from "react";
import { authClient } from "@/lib/auth/client";
import { StripEmptyObjects } from "@neondatabase/auth/types";

interface UserData {
  id: string;
  email: string;
  name: string;
  image?: string | null | undefined;
}

type ACTIONTYPE =
  | { type: "LOADING" }
  | { type: "ERROR"; payload?: string | null }
  | { type: "DATA"; payload?: StripEmptyObjects<UserData> | null };

const initialState = {
  isLoading: false,
  error: null as string | null,
  data: null as UserData | null,
};

function reducerActions(state: typeof initialState, action: ACTIONTYPE) {
  switch (action.type) {
    case "LOADING":
      return { ...state, isLoading: true };
    case "ERROR":
      return { isLoading: false, error: action.payload ?? null, data: null };
    case "DATA":
      return { isLoading: false, error: null, data: action.payload ?? null };
    default:
      return state;
  }
}

export default function useUserData() {
  const [state, dispatch] = useReducer(reducerActions, initialState);

  useEffect(() => {
    let isMounted = true;

    const getSession = async () => {
      dispatch({ type: "LOADING" });
      try {
        const { data } = await authClient.getSession();

        if (isMounted) {
          dispatch({ type: "DATA", payload: data?.user });
        }
      } catch (err) {
        if (isMounted) {
          dispatch({
            type: "ERROR",
            payload: err instanceof Error ? err.message : "Erro desconhecido",
          });
        }
      }
    };
    getSession();

    return () => {
      isMounted = false;
    };
  }, []);

  return {
    isLoading: state.isLoading,
    error: state.error,
    data: state.data,
    dispatch,
  };
}
