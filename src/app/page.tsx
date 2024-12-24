// import Image from "next/image";

// export default function Home() {
//   return (
//    <div>Home</div>
//   );
// }



import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-blue-600 mb-6">
              Next.js Authentication
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              A secure, modern authentication system built with cutting-edge technologies
            </p>
            {/* <div className="flex gap-4 justify-center">
              <Link 
                href="/login"
                className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
              >
                Login
              </Link>
              <Link 
                href="/signup"
                className="px-6 py-3 bg-white text-blue-600 font-medium rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors"
              >
                Sign Up
              </Link>
            </div> */}
          </div>

          {/* Features Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Secure Authentication</h3>
              <p className="text-gray-600">JWT-based authentication with secure password hashing and session management</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">User Management</h3>
              <p className="text-gray-600">Complete user profile system with email verification and password reset</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-lg font-semibold text-blue-600 mb-2">Modern UI</h3>
              <p className="text-gray-600">Responsive design with Tailwind CSS for a seamless user experience</p>
            </div>
          </div>

          {/* Tech Stack Section */}
          <div className="bg-white rounded-xl shadow-md p-8">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">Built With Modern Tech Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 relative">
                  {/* <Image
                    src="/api/placeholder/64/64"
                    alt="Next.js"
                    fill
                    className="object-contain"
                  /> */}
                </div>
                <p className="font-medium text-gray-600">Next.js</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 relative">
                  {/* <Image
                    src="/api/placeholder/64/64"
                    alt="MongoDB"
                    fill
                    className="object-contain"
                  /> */}
                </div>
                <p className="font-medium text-gray-600">MongoDB</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 relative">
                  {/* <Image
                    src="/api/placeholder/64/64"
                    alt="Tailwind CSS"
                    fill
                    className="object-contain"
                  /> */}
                </div>
                <p className="font-medium text-gray-600">Tailwind CSS</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 relative">
                  {/* <Image
                    src="/api/placeholder/64/64"
                    alt="TypeScript"
                    fill
                    className="object-contain"
                  /> */}
                </div>
                <p className="font-medium text-gray-600">TypeScript</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}