import { Button, Dropdown, Form, Input, Menu, Radio, Select } from "antd";
import { Option } from "antd/lib/mentions";
import axios from "axios";
import { count } from "node:console";
import { useEffect, useState } from "react";

export interface FormCreateAccountProps {}

type formStaticDataProps = {
	name: string;
};

type countryRawType = {
	name: string;
	callingCodes: string[];
	flag: string;
};

const FormLabel: React.FunctionComponent<formStaticDataProps> = ({ name }) => (
	<div className="text-base font-bold">{name}</div>
);

const FormHeader: React.FunctionComponent<formStaticDataProps> = ({ name }) => (
	<header className="text-xl font-bold mb-4 flex flex-row justify-start">
		{name}
	</header>
);

const FormCreateAccount: React.FunctionComponent = () => {
	const [countryArray, setCountryArray] = useState<countryRawType[]>();
	const [selectedCountry, setSelectedCountry] = useState<string>();

	useEffect(() => {
		axios.get("https://restcountries.eu/rest/v2/all").then((res) => {
			setCountryArray(res.data as countryRawType[]);
		});
	}, []);

	const titleData = ["Mrs", "Ms", "Mdm", "Mr", "Dr"];
	return (
		<div className="flex flex-col items-start mx-2">
			<div className="mx-2">
				<Form
					layout="vertical"
					onFinish={(values) => console.log(values)}
					onFinishFailed={(e) => console.log(`failed: ${e}`)}
				>
					<FormHeader name="Create New Account" />
					<div className="mx-2">
						<Form.Item
							label={<FormLabel name="Title" />}
							name="title"
						>
							<Radio.Group name="title">
								{titleData.map((title) => (
									<Radio value={{ title }}>{title}</Radio>
								))}
							</Radio.Group>
						</Form.Item>

						<Form.Item
							label={<FormLabel name="Last Name" />}
							name="lastName"
							rules={[
								{
									required: true,
								},
							]}
						>
							<Input />
						</Form.Item>
						<Form.Item
							label={<FormLabel name="First Name" />}
							name="firstName"
							rules={[
								{
									required: true,
									message: "Please add your first name!",
								},
							]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							label={<FormLabel name="Country" />}
							rules={[
								{
									required: true,
									message: "Please select country!",
								},
							]}
						>
							<Select
								placeholder="Select country..."
								onSelect={(value) =>
									setSelectedCountry(value.toString())
								}
							>
								{countryArray?.map((country) => (
									<Option value={country.callingCodes[0]}>
										<div className="flex flex-row">
											<img
												src={country.flag}
												className="w-10"
											/>
											<div className="mx-2">
												{country.name}
											</div>
										</div>
									</Option>
								))}
							</Select>
						</Form.Item>

						<Form.Item
							name="phone"
							label={<FormLabel name="Phone Number" />}
							rules={[
								{
									required: true,
									message: "Please add your phone number!",
								},
							]}
						>
							<Input addonBefore={selectedCountry} />
						</Form.Item>
					</div>

					<FormHeader name="Address" />

					<div className="mx-2">
						<Form.Item
							name="address"
							label={<FormLabel name="Address" />}
						>
							<Input />
						</Form.Item>

						<Form.Item
							name="country"
							label={<FormLabel name="Country/Location" />}
							rules={[
								{
									required: true,
									message: "Please add your country!",
								},
							]}
						>
							<Select
								placeholder="Select Country..."
								onSelect={(value) =>
									setSelectedCountry(value.toString())
								}
							>
								{countryArray?.map((country) => (
									<Option value={country.callingCodes[0]}>
										<div className="flex flex-row">
											<img
												src={country.flag}
												className="w-10"
											/>
											<div className="mx-2">
												{country.name}
											</div>
										</div>
									</Option>
								))}
							</Select>
						</Form.Item>
					</div>

					<FormHeader name="Contacts" />

					<div className="mx-2">
						<Form.Item
							name="email"
							label={<FormLabel name="email address" />}
							rules={[
								{
									required: true,
									message: "Please add your country!",
								},
							]}
						>
							<Input />
						</Form.Item>
					</div>

					<Button className="bg-yellow-200" htmlType="submit">
						Submit
					</Button>
				</Form>
			</div>
		</div>
	);
};

export default FormCreateAccount;
