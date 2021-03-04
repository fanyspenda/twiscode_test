import { Form, Radio } from "antd";

export interface FormCreateAccountProps {}

const FormCreateAccount: React.FunctionComponent = () => {
	return (
		<div className="flex flex-col items-start mx-2">
			<header className="text-xl font-bold mb-4">
				Create New Account
			</header>
			<Form layout="vertical">
				<Form.Item
					label={<div className="text-base font-bold">Title</div>}
				>
					<Radio.Group name="title">
						<Radio value={"Mrs"}>Mrs</Radio>
						<Radio value={"Ms"}>Ms</Radio>
						<Radio value={"Mdm"}>Mdm</Radio>
						<Radio value={"Mr"}>Mr</Radio>
						<Radio value={"Dr"}>Dr</Radio>
					</Radio.Group>
				</Form.Item>
			</Form>
		</div>
	);
};

export default FormCreateAccount;
