import Navbar from "@/components/navbar";
import Image from "next/image";
import Cosmetics from "@/components/cosmetics";

async function getData() {
  const res = await fetch(
    "https://cdn.contentful.com/spaces/xxaqlmo3p7p9/environments/master/entries/18tndCHuejC9ngUkLUdYOJ?access_token=G4LtctqCqkQx3Dzhze-bS_Bc3Gly5Zi0wq4uPImeL88"
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return (
    <>
      <Navbar />
      <div id="home" className="pt-24">
        <div className="flex justify-between">
          <div className="text-3xl font-bold flex ml-16 mb-16">
            {data.fields.titles}
          </div>
          <div className="flex justify-end mr-10">{data.fields.date}</div>
        </div>
        <div className="flex justify-center mb-20">
          <Image
            alt="post x apex"
            src={"/postmalone-apex.jpg"}
            width={800}
            height={500}
          />
        </div>
        <div id="limited" className="w-full flex justify-center mb-32">
          <div className="w-[800px] text-justify leading-7">
            {data.fields.description.content.map((item) => {
              return item.content.map((item) => {
                return item.value;
              });
            })}
          </div>
        </div>
        <div className="font-mono text-3xl ml-16 font-semibold mb-10">
          NEW LIMITED TIME MODE : THREE STRIKES
        </div>
        <div className="flex ml-16 space-x-10">
          <Image
            alt="three strikes"
            src={"/three-strikes.jpg"}
            width={400}
            height={100}
          />
          <div className="w-[700px] text-justify leading-7">
            {data.fields.subDescription.content.map((item) => {
              return item.content.map((item, index) => {
                return (
                  <div key={index} className="mb-5">
                    {item.value}
                  </div>
                );
              });
            })}
          </div>
        </div>
        <div id="cosmetics" className="flex flex-col items-end mt-20 mr-16">
          <div className="font-mono text-3xl font-semibold">
            COSMETICS DESIGNED WITH POST MALONE
          </div>
          <div className="flex space-x-10">
            <div className="w-[700px] mt-12 text-justify leading-7">
              {data.fields.subDescription2.content.map((item) => {
                return item.content.map((item, index) => {
                  return (
                    <div key={index} className="mb-5">
                      {item.value}
                    </div>
                  );
                });
              })}
            </div>
            <Cosmetics />
          </div>
        </div>
      </div>
    </>
  );
}
