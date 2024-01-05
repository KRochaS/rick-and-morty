import ClipLoader from "react-spinners/ClipLoader";

export function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <ClipLoader
        color="000"
        loading={true}
        size={90}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
