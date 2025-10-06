import { ClipLoader } from "react-spinners";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <ClipLoader color="#3B82F6" size={75} />
    </div>
  );
}