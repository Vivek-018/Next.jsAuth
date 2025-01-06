
// // "use client";

// // export default  function Profile<T extends { [key: string]: string }>({ params }: { params: T }) {

// //   const { id } =  params;

// //   return (
// //       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-6 flex flex-col justify-center sm:py-12">
// //           <div className="relative py-3 sm:max-w-xl sm:mx-auto">
// //               <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
// //               <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
// //                   <div className="max-w-md mx-auto">
// //                       <div className="divide-y divide-gray-200">
// //                           <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
// //                               <div className="text-center mb-8">
// //                                   <h1 className="text-3xl font-bold text-blue-600 mb-2">User Profile</h1>
// //                                   <div className="h-1 w-24 bg-blue-500 mx-auto rounded"></div>
// //                               </div>

// //                               <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
// //                                   <h2 className="text-sm font-medium text-gray-500 mb-2">USER ID</h2>
// //                                   <p className="text-lg font-medium text-gray-900 break-all">
// //                                       {id}
// //                                   </p>
// //                               </div>

// //                               <div className="mt-8 text-center">
// //                                   <button 
// //                                       onClick={() => window.history.back()}
// //                                       className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
// //                                   >
// //                                       Back to Profile
// //                                   </button>
// //                               </div>
// //                           </div>
// //                       </div>
// //                   </div>
// //               </div>
// //           </div>
// //       </div>
// //   );
// // }

// // "use client";

// import { GetServerSideProps } from 'next';

// export default function Profile({ params }: GetServerSideProps<{ params: { id: string } }>) {

//   const { id } = params;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 py-6 flex flex-col justify-center sm:py-12">
//       <div className="relative py-3 sm:max-w-xl sm:mx-auto">
//         <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
//         <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
//           <div className="max-w-md mx-auto">
//             <div className="divide-y divide-gray-200">
//               <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
//                 <div className="text-center mb-8">
//                   <h1 className="text-3xl font-bold text-blue-600 mb-2">User Profile</h1>
//                   <div className="h-1 w-24 bg-blue-500 mx-auto rounded"></div>
//                 </div>

//                 <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
//                   <h2 className="text-sm font-medium text-gray-500 mb-2">USER ID</h2>
//                   <p className="text-lg font-medium text-gray-900 break-all">
//                     {id}
//                   </p>
//                 </div>

//                 <div className="mt-8 text-center">
//                   <button 
//                     onClick={() => window.history.back()}
//                     className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-150 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//                   >
//                     Back to Profile
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export const getServerSideProps: GetServerSideProps = async (context) => {
//   const { params } = context;

//   return {
//     props: {
//       params,
//     },
//   };
// };


// export default function UserProfile({params}: any) {
//     return (
//         <div className="flex flex-col items-center justify-center min-h-screen py-2">
//             <h1>Profile</h1>
//             <hr />
//             <p className="text-4xl">Profile page 
//             <span className=" p-2 ml-2 rounded bg-orange-500 text-black">{params.id}</span>
//             </p>

//             </div>
//     )
// }



import { NextPage } from 'next';

interface UserProfileProps {
    params: {
        id: string; // Assuming `id` is a string
    };
}

const UserProfile: NextPage<UserProfileProps> = ({ params }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className='text-4xl font-bold'>Profile</h1>
            <hr />
            <p className="text-4xl">
                Profile page
                <span className="p-2 ml-2 rounded bg-blue-500 text-black">{params.id}</span>
            </p>
        </div>
    );
};

export default UserProfile;

