type userType = {
  user: {
    name: string;
    age: number;
    gender: string;
    isRegistered: boolean;
    lang: string[];
  };
};
const Users = ({ user }: userType) => {
  const { name, age, gender, isRegistered, lang } = user;
  return (
    <div>
      <div style={{ border: "2px solid", margin: "0.5rem" }}>
        <h3>Name: {name}</h3>
        <h4>Age: {age}</h4>
        <h4>Gender: {gender}</h4>
        <h4>Registered: {isRegistered ? " Yes" : " No"}</h4>
        <p>
          Language Known:{" "}
          {lang.map((language, index) => (
            <span key={index}>
              {index + 1}. {language + ",\t"}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default Users;
