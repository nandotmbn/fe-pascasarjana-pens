import Image from 'next/image';
import React from 'react';
import ICEJumbotron from './partials/Jumbotron';
import ICEQualification from './partials/Qualification';
import ICESpecifications from './partials/Specifications';
import ICEVisionAndMission from './partials/VisionAndMission';

function InformaticsAndComputerEngineeringView() {
  return (
    <div className="flex w-full flex-col">
			<ICEJumbotron />
      <div className="relative">
				<div className="absolute left-0 -top-12">
					<Image
						className="contain w-full relative"
						src="/images/home/ornament_2.png"
						alt="Jumbotron PENS"
						width={120}
						height={1}
					/>
				</div>
			</div>
			<ICEVisionAndMission />
      <div className="relative">
				<div className="absolute right-0 -top-20">
					<Image
						className="contain w-full relative"
						src="/images/home/ornament_4.png"
						alt="Jumbotron PENS"
						width={60}
						height={1}
					/>
				</div>
			</div>
			<ICEQualification />
      <div className="relative">
				<div className="absolute left-0 -top-20">
					<Image
						className="contain w-full relative"
						src="/images/home/ornament_2.png"
						alt="Jumbotron PENS"
						width={100}
						height={1}
					/>
				</div>
			</div>
			<ICESpecifications />
      <div className="relative">
				<div className="absolute right-0 -top-72">
					<Image
						className="contain w-full relative"
						src="/images/home/ornament_4.png"
						alt="Jumbotron PENS"
						width={60}
						height={1}
					/>
				</div>
			</div>
		</div>
  );
}

export default InformaticsAndComputerEngineeringView