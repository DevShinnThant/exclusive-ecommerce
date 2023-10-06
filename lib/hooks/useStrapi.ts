import { useState, useEffect } from "react";
import strapi from "../strapi";

type DataType = any;

export function useStrapi() {
  const [data, setData] = useState<DataType | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (endpoint: string) => {
    setLoading(true);
    try {
      const response = await strapi.find(endpoint);
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  const createData = async (endpoint: string, data: DataType) => {
    setLoading(true);
    try {
      const response = await strapi.create(endpoint, data);
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  const updateData = async (endpoint: string, id: string, data: DataType) => {
    setLoading(true);
    try {
      const response = await strapi.update(endpoint, id, data);
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  const deleteData = async (endpoint: string, id: string) => {
    setLoading(true);
    try {
      await strapi.delete(endpoint, id);
      setData(null);
      setError(null);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return {
    data,
    loading,
    error,
    fetchData,
    createData,
    updateData,
    deleteData,
  };
}
