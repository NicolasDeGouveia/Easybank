const ButtonInvite = ({ hidden }) => {
  return (
    <button
      className={
        hidden
          ? "hidden lg:block border-none gradient  text-white py-3 px-8 rounded-full"
          : "lg:block border-none gradient  text-white py-3 px-8 rounded-full"
      }
    >
      Request Invite
    </button>
  );
};

export default ButtonInvite;
