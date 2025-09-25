

function FooterBase() {
  return (
    <footer className="bg-slate-400   text-center md:text-left">
      <div className="text-sm text-white   pt-4 pb-4 text-center">
        © {new Date().getFullYear()} The Lemich Clinic <span className="mx-1">•</span> Norfolk, Virginia
      </div>
    </footer>
  );
}

export default FooterBase;
