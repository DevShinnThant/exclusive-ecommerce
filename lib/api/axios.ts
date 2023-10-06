import axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_DATABASE_URL;

export default axios.create({
  baseURL: BASE_URL,
});

export const authJsonHeader = ({
  token,
  isFile,
}: {
  token: string;
  isFile?: boolean;
}) => {
  const contentType = isFile ? "multipart/form-date" : "Application/json";

  return {
    "Content-Type": contentType,
    Accpet: "application/json",
    Authorization: `Bearer ${token}`,
  };
};
