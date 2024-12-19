type statusProps = {
  status: "loading" | "error" | "success";
};

const Users = ({ status }: statusProps) => {
  if (status == "loading") {
    return <h3>Data is Loading...</h3>;
  } else if (status == "error") {
    return <h3>Error : Couldn't find data</h3>;
  } else {
    return <h3>Data fatched successfully</h3>;
  }
};

export default Users;
