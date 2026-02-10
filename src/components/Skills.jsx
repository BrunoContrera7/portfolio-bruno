import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiMysql,
  SiPostgresql,
  SiSqlite,
  SiPostman,
  SiNgrok,
  SiGithub,
  SiGit,
  SiReact,
  SiExpress,
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { FaNodeJs } from "react-icons/fa";

function Skills() {
  return (
      <div className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Languages & Frameworks */}
          <div className="bg-[#18181B] rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Languages & Frameworks</h3>
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 bg-[#242427] border border-gray-500 px-3 py-1 rounded-xl">
                <SiHtml5 className="text-gray-500" /> HTML
              </span>
              <span className="flex items-center gap-2 bg-[#242427] border border-gray-500 px-3 py-1 rounded-xl">
                <SiCss3 className="text-gray-400" /> CSS
              </span>
              <span className="flex items-center gap-2 bg-[#242427] border border-gray-500 px-3 py-1 rounded-xl">
                <SiJavascript className="text-gray-400" /> JavaScript
              </span>
              <span className="flex items-center gap-2 bg-[#242427] border border-gray-500 px-3 py-1 rounded-xl">
                <SiMysql className="text-gray-400" /> SQL
              </span>
              <span className="flex items-center gap-2 bg-[#242427] border border-gray-500 px-3 py-1 rounded-xl">
                <SiReact className="text-gray-400" /> React
              </span>
              <span className="flex items-center gap-2 bg-[#242427] border border-gray-500 px-3 py-1 rounded-xl">
                <FaNodeJs className="text-gray-400" /> Node
              </span>
              <span className="flex items-center gap-2 bg-[#242427] border border-gray-500 px-3 py-1 rounded-xl">
                <SiExpress className="text-gray-400" /> Express
              </span>
            </div>
          </div>

          {/* Databases */}
          <div className="bg-[#18181B] rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Databases</h3>
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 bg-[#242427] border border-gray-500 px-3 py-1 rounded-xl">
                <SiMysql className="text-gray-500" /> MySQL
              </span>
              <span className="flex items-center gap-2 bg-[#242427] border border-gray-500 px-3 py-1 rounded-xl">
                <SiPostgresql className="text-gray-400" /> PostgreSQL
              </span>
              <span className="flex items-center gap-2 bg-[#242427] border border-gray-500 px-3 py-1 rounded-xl">
                <SiSqlite className="text-gray-300" /> SQLite
              </span>
            </div>
          </div>

          {/* Tools */}
          <div className="bg-[#18181B] rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Tools</h3>
            <div className="flex flex-wrap gap-3">
              <span className="flex items-center gap-2 bg-[#242427] border border-gray-500 px-3 py-1 rounded-xl">
                <DiVisualstudio className="text-gray-400" /> VS Code
              </span>
              <span className="flex items-center gap-2 bg-[#242427] border border-gray-500 px-3 py-1 rounded-xl">
                <SiGithub className="text-gray-500" /> GitHub
              </span>
              <span className="flex items-center gap-2 bg-[#242427] border border-gray-500 px-3 py-1 rounded-xl">
                <SiGit className="text-gray-500" /> Git
              </span>
              <span className="flex items-center gap-2 bg-[#242427] border border-gray-500 px-3 py-1 rounded-xl">
                <SiPostman className="text-gray-400" /> Postman
              </span>
              <span className="flex items-center gap-2 bg-[#242427] border border-gray-500 px-3 py-1 rounded-xl">
                <SiNgrok className="text-gray-400" /> Ngrok
              </span>
            </div>
          </div>

          {/* Spoken Languages */}
          <div className="bg-[#18181B] rounded-2xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">Spoken Languages</h3>
            <div className="flex flex-wrap gap-3">
              <span className="border border-gray-500 bg-[#242427] px-3 py-1 rounded-xl">
                Spanish • <span className="text-gray-500">Native</span>
              </span>
              <span className="border border-gray-500 bg-[#242427] px-3 py-1 rounded-xl">
                English • <span className="text-gray-500">Intermediate</span>
              </span>
            </div>
          </div>
        </div>
      </div>
  );
}

export default Skills;
