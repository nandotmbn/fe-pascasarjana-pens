import { Breadcrumb, Modal } from "antd";
import React, { useState } from "react";
import AddUserEducationPanel from "./partials/AddUserEducationPanel";
import UserEducation from "./partials/UserEducation";
import BiodataUserList from "./partials/UserList";

function AdminEducationViews() {
	const [isModalOpened, setModalOpened] = useState(false);

	return (
		<div className="h-full">
			<Breadcrumb
				items={[
					{
						title: "Pengguna",
					},
					{
						title: "Pendidikan",
					},
				]}
			/>
			<div className="m-0 overflow-auto overflow-hidden h-full w-full py-4">
				<div className="flex flex-row gap-8 w-full h-full">
					<BiodataUserList />
					<UserEducation
						isModalOpened={isModalOpened}
						setModalOpened={setModalOpened}
					/>
					<Modal
						title="Tambah Pendidikan Pengguna"
						open={isModalOpened}
						onCancel={() => setModalOpened(false)}
						footer={false}
						maskClosable={false}
					>
						<AddUserEducationPanel />
					</Modal>
				</div>
			</div>
		</div>
	);
}

export default AdminEducationViews;
