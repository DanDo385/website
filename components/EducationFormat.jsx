import Image from 'next/image';
import { cornerImages, educationDetails } from '../data/psu';

const EducationFormat = () => {
  return (
    <>
      <div className="flex flex-wrap justify-center items-center min-h-screen">
        <div className="w-full flex justify-center p-4">
          <Image
            src={cornerImages[0].src}
            alt="Top Image"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center w-full px-2 sm:px-10">
          <div className="w-full sm:w-1/4 p-2">
            <Image
              src={cornerImages[2].src}
              alt="Left Image"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          
          <div className="text-black max-w-md w-full sm:w-1/2 rounded overflow-hidden shadow-lg bg-white p-4 m-2 z-10">
            <div className="flex items-center mb-4">
              <Image src="/psu5.jpg" alt="Avatar" width={80} height={80} className="rounded-full" />
              <div className="ml-3">
                <div className="font-bold text-xl">{educationDetails.universityName}</div>
                <p className="text-slate-700 text-base">{educationDetails.location}</p>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="table-auto min-w-full">
                <tbody>
                  <tr className="bg-slate-300">
                    <td className="border px-4 py-2">Class:</td>
                    <td className="border px-4 py-2">{educationDetails.classYear}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">Major:</td>
                    <td className="border px-4 py-2">{educationDetails.major}</td>
                  </tr>
                  <tr className="bg-slate-300">
                    <td className="border px-4 py-2">Honors:</td>
                    <td className="border px-4 py-2">{educationDetails.honors}</td>
                  </tr>
                  <tr>
                    <td className="border px-4 py-2">GPA:</td>
                    <td className="border px-4 py-2">{educationDetails.gpa}</td>
                  </tr>
                  <tr className="bg-slate-300">
                    <td className="border px-4 py-2">Major GPA:</td>
                    <td className="border px-4 py-2">{educationDetails.majorGPA}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="w-full sm:w-1/4 p-2">
            <Image
              src={cornerImages[3].src}
              alt="Right Image"
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>

        <div className="w-full flex justify-center p-4">
          <Image
            src={cornerImages[1].src}
            alt="Bottom Image"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default EducationFormat;
