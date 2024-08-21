import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4">
      {/* Hero Section */}
      <section className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4">Hi, I'm [Your Name]</h1>
        <p className="text-lg text-gray-600">A [Your Profession or Role]</p>
        <div className="mt-6">
          <Image 
            src="/profile.jpg" 
            alt="[Your Name] Profile Picture" 
            width={150} 
            height={150} 
            className="rounded-full"
          />
        </div>
      </section>

      {/* About Me Section */}
      <section className="max-w-2xl text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 leading-relaxed">
          I'm a [Your Profession/Background]. I specialize in [Your Specialties or Areas of Expertise]. 
          When I'm not working, I enjoy [Your Hobbies or Interests].
        </p>
      </section>

      {/* Projects Section */}
      <section className="max-w-2xl text-center mb-12">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <ul className="text-gray-700 leading-relaxed">
          <li className="mb-4">
            <Link href="/project1" className="text-blue-500 hover:underline">
              Project 1
            </Link>: Brief description of your project.
          </li>
          <li className="mb-4">
            <Link href="/project2" className="text-blue-500 hover:underline">
              Project 2
            </Link>: Brief description of your project.
          </li>
          <li className="mb-4">
            <Link href="/project3" className="text-blue-500 hover:underline">
              Project 3
            </Link>: Brief description of your project.
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Contact</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Feel free to reach out to me at <a href="mailto:your-email@example.com" className="text-blue-500 hover:underline">your-email@example.com</a>.
        </p>
        <div>
          <Link href="https://www.linkedin.com/in/yourprofile" className="text-blue-500 hover:underline mr-4">
            LinkedIn
          </Link>
          <Link href="https://github.com/yourgithub" className="text-blue-500 hover:underline">
            GitHub
          </Link>
        </div>
      </section>
    </main>
  );
}
