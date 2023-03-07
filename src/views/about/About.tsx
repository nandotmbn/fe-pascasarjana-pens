/* eslint-disable react/no-unescaped-entities */
import { Collapse } from "antd";
import React from "react";
import CourseDistribution from "./partials/CourseDistribution";
import Description from "./partials/Description";
import LearningSystem from "./partials/LearningSystem";
import LegalBasis from "./partials/LegalBasis";
import ModelSystem from "./partials/ModelSystem";
import ProgramCharacteristics from "./partials/ProgramCharacteristics";

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

function AboutView() {
	return (
		<div className="w-10/12 m-auto flex-row flex gap-8 my-2">
			<div className="flex flex-5 flex-col">
				<h1 className="text-4xl font-bold text-gray-500 my-12">
					Tentang Pascasarjana PENS
				</h1>
				<Collapse defaultActiveKey="1">
					<Collapse.Panel
						header={
							<h3 className="text-blue-500 text-2xl font-semibold text-blue-800">
								Deskripsi Pascasarjana PENS
							</h3>
						}
						key="1"
					>
						<Description />
					</Collapse.Panel>
					<Collapse.Panel
						header={
							<h3 className="text-blue-500 text-2xl font-semibold text-blue-800">
								Dasar Hukum
							</h3>
						}
						key="2"
					>
            <LegalBasis />
					</Collapse.Panel>
					<Collapse.Panel
						header={
							<h3 className="text-blue-500 text-2xl font-semibold text-blue-800">
								Sistem Model
							</h3>
						}
						key="3"
					>
            <ModelSystem />
					</Collapse.Panel>
					<Collapse.Panel
						header={
							<h3 className="text-blue-500 text-2xl font-semibold text-blue-800">
								Karakteristik Program
							</h3>
						}
						key="4"
					>
            <ProgramCharacteristics />
					</Collapse.Panel>
					<Collapse.Panel
						header={
							<h3 className="text-blue-500 text-2xl font-semibold text-blue-800">
								Sistem Pembelajaran
							</h3>
						}
						key="5"
					>
            <LearningSystem />
					</Collapse.Panel>
					<Collapse.Panel
						header={
							<h3 className="text-blue-500 text-2xl font-semibold text-blue-800">
								Distribusi Mata Kuliah
							</h3>
						}
						key="6"
					>
            <CourseDistribution />
					</Collapse.Panel>
				</Collapse>
			</div>
			<div className="flex flex-2">
				<h2>Berita Terbaru</h2>
			</div>
		</div>
	);
}

export default AboutView;
