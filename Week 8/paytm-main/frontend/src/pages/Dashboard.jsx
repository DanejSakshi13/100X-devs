import Appbar from "../signin-ed-components/Appbar";
import Balance from "../signin-ed-components/Balance";
import SendMoney from "../signin-ed-components/SendMoney";
import Users from "../signin-ed-components/Users";

export default function Dashboard() {
  return (
    <div>
      <Appbar />
      <Balance />
      <Users />
    </div>
  );
}
