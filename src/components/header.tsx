import { Menu, Dropdown } from "antd";
import { useState } from "react";
import twiscodeLogo from "../twiscodeLogo.png";
import { DownOutlined, SettingFilled } from "@ant-design/icons";

export interface HeaderProps {}

const Header: React.FunctionComponent = () => {
	const [language, setLanguage] = useState("English");
	return (
		<div>
			<div className="flex flex-col items-center">
				<img src={twiscodeLogo} className="w-52" alt="" />
			</div>
			<div className="flex flex-row justify-start items-center">
				<Dropdown
					overlay={
						<Menu>
							<Menu.Item
								key="English"
								onClick={(i) => setLanguage(i.key.toString())}
							>
								English
							</Menu.Item>
							<Menu.Item
								key="Indonesia"
								onClick={(i) => setLanguage(i.key.toString())}
							>
								Indonesia
							</Menu.Item>
						</Menu>
					}
					trigger={["click"]}
				>
					<p>
						Language: {language} <DownOutlined />
					</p>
				</Dropdown>
				<SettingFilled />
			</div>
		</div>
	);
};

export default Header;
