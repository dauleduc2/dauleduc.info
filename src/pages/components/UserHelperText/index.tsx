interface UserHelperTextProps {
  isOpening: boolean;
}

const UserHelperText: React.FunctionComponent<UserHelperTextProps> = ({
  isOpening,
}) => {
  if (isOpening)
    return (
      <div className="fixed inset-0 z-20 flex flex-col items-center justify-center w-screen h-screen text-white bg-black/100">
        <img className="w-40 h-40" src="/rotate.gif" alt="rotate helper" />
        <div>Please use your landscape view</div>
      </div>
    );
  return <></>;
};

export default UserHelperText;
