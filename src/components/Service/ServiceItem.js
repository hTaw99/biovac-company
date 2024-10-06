import { convertToSlug } from "@/common/utils";
import Link from "next/link";

const ServiceItem = ({ data, type }) => {
  return (
    <>
      {type === "style-one" && (
        <div className="h-full bg-white service-item -solution rounded-2xl">
          <Link
            className="flex flex-col h-full p-8 main md:p-10"
            href={process.env.PUBLIC_URL + "/services/[slug]"}
            as={
              process.env.PUBLIC_URL +
              "/services/" +
              convertToSlug(data.title) +
              "?id=" +
              data.id
            }
          >
            <i className={`${data.icon} text-6xl text-blue`}></i>
            <strong className="mt-6 service-name heading5">{data.title}</strong>
            <p className="mt-3 service-desc text-surface1">{data.desc}</p>
          </Link>
        </div>
      )}
      {type === "style-two" && (
        <div className="h-full bg-white service-item style-two rounded-2xl">
          <Link
            className="flex h-full gap-6 p-8 main md:p-10"
            href={process.env.PUBLIC_URL + "/services/[slug]"}
            as={
              process.env.PUBLIC_URL +
              "/services/" +
              convertToSlug(data.title) +
              "?id=" +
              data.id
            }
          >
            <i className={`${data.icon} text-6xl text-blue flex-shrink-0`}></i>
            <div className="">
              <strong className="service-name heading5">{data.title}</strong>
              <p className="mt-3 whitespace-normal service-desc text-surface1">
                {data.desc}
              </p>
            </div>
          </Link>
        </div>
      )}
      {type === "style-three" && (
        <div className="service-item -solution style-three">
          <Link
            className="main"
            href={process.env.PUBLIC_URL + "/services/[slug]"}
            as={
              process.env.PUBLIC_URL +
              "/services/" +
              convertToSlug(data.title) +
              "?id=" +
              data.id
            }
          >
            <i className={`${data.icon} text-6xl flex-shrink-0`}></i>
            <div className="mt-6">
              <strong className="service-name heading5">{data.title}</strong>
              <p className="mt-3 whitespace-normal service-desc">{data.desc}</p>
            </div>
          </Link>
        </div>
      )}
      {type === "style-four" && (
        <div className="h-full bg-white service-item style-four -solution">
          <Link
            className="main md:p-[60px] p-10 flex max-sm:flex-col gap-6 h-full"
            href={process.env.PUBLIC_URL + "/services/[slug]"}
            as={
              process.env.PUBLIC_URL +
              "/services/" +
              convertToSlug(data.title) +
              "?id=" +
              data.id
            }
          >
            <i className={`${data.icon} text-6xl text-pink flex-shrink-0`}></i>
            <div className="">
              <strong className="service-name heading5">{data.title}</strong>
              <p className="mt-3 whitespace-normal service-desc body2 text-surface1">
                {data.desc}
              </p>
            </div>
          </Link>
        </div>
      )}
      {type === "style-five" && (
        <div className="service-item -solution style-five">
          <Link
            className="relative block h-full p-10 bg-white border-r main max-sm:py-6 max-sm:px-8 border-outline"
            href={process.env.PUBLIC_URL + "/services/[slug]"}
            as={
              process.env.PUBLIC_URL +
              "/services/" +
              convertToSlug(data.title) +
              "?id=" +
              data.id
            }
          >
            <div className="absolute flex items-center duration-500 opacity-0 slash -top-4 right-6">
              <span className="text-5xl icon-slash"></span>
              <span className="-ml-6 text-5xl icon-slash"></span>
            </div>
            <i className={`${data.icon} text-6xl flex-shrink-0`}></i>
            <div className="mt-6">
              <strong className="duration-300 service-name heading5">
                {data.title}
              </strong>
              <p className="mt-3 whitespace-normal service-desc body2 text-surface1">
                {data.desc}
              </p>
            </div>
          </Link>
        </div>
      )}
      {type === "style-six" && (
        <div className="service-item style-six">
          <Link
            className="main p-8 block relative h-full bg-white rounded-[20px] shadow-lg"
            href={process.env.PUBLIC_URL + "/services/[slug]"}
            as={
              process.env.PUBLIC_URL +
              "/services/" +
              convertToSlug(data.title) +
              "?id=" +
              data.id
            }
          >
            <i
              className={`${data.icon} text-purple text-6xl flex-shrink-0`}
            ></i>
            <div className="mt-6">
              <strong className="duration-300 service-name heading5">
                {data.title}
              </strong>
              <p className="mt-3 whitespace-normal service-desc body2 text-surface1">
                {data.desc}
              </p>
            </div>
          </Link>
        </div>
      )}
      {type === "style-seven" && (
        <div className="h-full bg-white border service-item -solution rounded-2xl border-outline">
          <Link
            className="flex flex-col items-center h-full p-8 main xl:p-10"
            href={process.env.PUBLIC_URL + "/services/[slug]"}
            as={
              process.env.PUBLIC_URL +
              "/services/" +
              convertToSlug(data.title) +
              "?id=" +
              data.id
            }
          >
            <i className={`${data.icon} text-6xl`}></i>
            <strong className="mt-6 service-name heading5">{data.title}</strong>
            <p className="mt-3 service-desc text-surface1">{data.desc}</p>
          </Link>
        </div>
      )}
    </>
  );
};

export default ServiceItem;
