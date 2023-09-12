export default function LoadingSpinner() {
  return (
    <div className="flex h-[50vh] w-full items-center justify-center">
      <div className="h-20 w-20 animate-spin rounded-[50%] border-[0.625rem] border-solid border-white border-b-[#EF3B39] border-t-[#F6B765]"></div>
    </div>
  );
}
