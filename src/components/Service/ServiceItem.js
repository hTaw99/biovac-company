const ServiceItem = ({ data }) => {
  return (
    <div className="flex flex-col h-full p-8 bg-white main md:p-10 service-item -solution rounded-2xl">
      <i className={`${data.icon} text-6xl text-blue`}></i>
      <strong className="mt-6 service-name heading5">{data.title}</strong>
      <p className="mt-3 service-desc text-surface1">{data.desc}</p>
    </div>
  );
};

export default ServiceItem;
