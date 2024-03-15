import profile from "../../assets/images/profile.png";
const Nav = () => {
  return (
    <div className="bg-slate-700 px-0 py-5">
      <div className="flex justify-between items-center container mx-auto">
        <h2 className="font-bold text-2xl text-white">
          Narrative <span className="text-blue-600">Nexus</span>
        </h2>
        <div>
          <img
            className="border border-blue-600 rounded-full w-20 h-20"
            src={profile}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
