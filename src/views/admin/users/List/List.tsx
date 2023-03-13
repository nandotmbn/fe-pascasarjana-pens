import { Breadcrumb, Input, Modal } from "antd";
import React, { useState } from "react";
import AddUserPanel from "./partials/AddUserPanel";
import ControlPanelList from "./partials/ControlPanel";
import BiodataUserList from "./partials/UserList";

function AdminListViews() {
	const [isModalOpened, setModalOpened] = useState(false);
	return (
		<div className="h-full">
			<Breadcrumb
				items={[
					{
						title: "Pengguna",
					},
					{
						title: "Daftar",
					},
				]}
			/>
			<div className="m-0 overflow-auto overflow-hidden h-full w-full py-4">
				<div className="flex flex-row gap-8 w-full h-full">
					<BiodataUserList
						isModalOpened={isModalOpened}
						setModalOpened={setModalOpened}
					/>
					<ControlPanelList />
					<Modal
						title="Tambah Pengguna"
						open={isModalOpened}
						onCancel={() => setModalOpened(false)}
						footer={false}
						maskClosable={false}
					>
						<AddUserPanel />
					</Modal>
				</div>
			</div>
		</div>
	);
}

export default AdminListViews;
