import { ObjectId } from "mongodb";
import "./UserVer.css";

type userProps = {
  id: ObjectId;
  userName: string;
  auth: boolean;
  func: (userName: string) => void;
};

const UserVer = ({ id, userName, auth, func }: userProps) => {
  const removeSelf = () => {
    func(userName);
  };

  return (
    <span id={id.toString()} onClick={removeSelf} className="elems">
      <span>{userName}</span>
      {auth && <span>&#9989;</span>}
      {!auth && <span>&#10060;</span>}
    </span>
  );
};

export default UserVer;
