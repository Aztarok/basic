import UploadDnd from '@/components/UploadDnd';
import React from 'react';

const page = () => {
	return (
		<div className="container mx-auto py-10">
			<div className="w-full flex flex-col md:flex-row items-center md:items-stretch gap-20 px-10">
				<div className="flex flex-col items-center gap-8 md:w-1/3">
					<div className="flex flex-col items-center gap-5 w-full">
						<h3 className="font-bold text-white text-xl">
							Upload a photo of your room
						</h3>
						<UploadDnd />
					</div>
					<div className="flex flex-col items-center gap-5 w-full">
						<h3 className="font-bold text-white text-xl">
							Select Room Type
						</h3>
					</div>
					<div className="flex flex-col items-center gap-5 w-full">
						<h3 className="font-bold text-white text-xl">
							Select Room Theme
						</h3>
					</div>
				</div>
				<div className="md:w-2/3 flex flex-col items-center pb-10">
					<div className="md:flex hidden flex-col gap-5 text-center">
						<h1 className="text-6xl text-white font-bold">
							Redesign your{' '}
							<span className="text-blue-500">room</span> in
							seconds
						</h1>
						<p className="text-2xl text-white">
							Upload a room, specify the room type, and select
							your room theme to redesign.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;