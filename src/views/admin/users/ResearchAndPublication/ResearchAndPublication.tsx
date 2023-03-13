import { Breadcrumb, Modal } from "antd";
import React, { useState } from "react";
import AddUserResearchAndPublicationPanel from "./partials/AddUserResearchAndPublicationPanel";
import UserResearchAndPublication from "./partials/UserResearchAndPublication";
import BiodataUserList from "./partials/UserList";

function ResearchAndPublicationViews() {
	const [isModalOpened, setModalOpened] = useState(false);

	return (
		<div className="h-full">
			<Breadcrumb
				items={[
					{
						title: "Pengguna",
					},
					{
						title: "Riset dan Publikasi",
					},
				]}
			/>
			<div className="m-0 overflow-auto overflow-hidden h-full w-full py-4">
				<div className="flex flex-row gap-8 w-full h-full">
					<BiodataUserList />
					<UserResearchAndPublication
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
						<AddUserResearchAndPublicationPanel />
					</Modal>
				</div>
			</div>
		</div>
	);
}

export default ResearchAndPublicationViews;
