import Image from "next/image";

export default function Page() {
  return (
    <section>
      <Image src="/uidai-hackathon-2026.png" alt="UIDAI Data Hackathon 2026" width={800} height={400} />
      <h1 className="pb-8 text-3xl font-semibold">UIDAI Data Hackathon 2026</h1>
      <div className=" flex flex-col space-y-2">
        <p>
          <span className="font-semibold">Problem Statement</span>:
          Understanding repeated aadhar engagement patterns and their impact on
          users.
        </p>
        <p>
          <span className="font-semibold"> Author</span>:{" "}
          <a href="https://linkedin.com/in/bmoit/" target="_blank">Rajneesh</a>
        </p>
        <p>
          <span className="font-semibold"> Date of Submission</span>:{" "}
            20th January, 2026 <a className="text-[8.5px] italic" href="https://event.data.gov.in/challenge/uidai-data-hackathon-2026/">More Info</a>
          </p>
      </div>
      <hr className="text-neutral-300 max-w-lg mx-auto my-8" />
      <div className="grid grid-cols-2 gap-4 mb-10">
        <div className="card"><p className="font-medium">Matplot Source Code</p></div>
        <div className="card"><p className="font-medium">Detailed Analysis</p>
        <a className="rounded" href="/detailed-analysis.pdf" download>Download</a></div>

      </div>
    </section>
  );
}
