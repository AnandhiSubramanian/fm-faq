import Accordion from "./Accordion";

export default function FAQDialog() {
  const FAQs = [
    {
      title: "What is Frontend Mentor, and how will it help me? ",
      description:
        "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      title: "Is Frontend Mentor free? ",
      description:
        "2 Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      title: "Can I use Frontend Mentorprojects in my portfolio? ",
      description:
        "3 Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
    {
      title: "How can I get help if I'm stuck on a challenge? ",
      description:
        "4 Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    },
  ];

  return (
    <dialog
      open
      className="fixed top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 rounded-2xl p-6 shadow-2xl md:w-11/12 lg:w-1/2 sm:w-11/12"
    >
      <div>
        <div className="inline-block align-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="41"
            fill="none"
            viewBox="0 0 40 41"
          >
            <path
              fill="#AD28EB"
              d="M37.5 20.5a2.467 2.467 0 0 1-1.64 2.344l-9.913 3.604-3.603 9.911a2.5 2.5 0 0 1-4.688 0l-3.604-9.922-9.911-3.593a2.5 2.5 0 0 1 0-4.688l9.921-3.604 3.594-9.911a2.5 2.5 0 0 1 4.688 0l3.604 9.921 9.911 3.594A2.467 2.467 0 0 1 37.5 20.5Z"
            />
          </svg>
        </div>

        <div className="inline-block align-middle font-bold text-project-palette-darkPurple font-work-sans font-extrabold text-3xl pl-3">
          FAQs
        </div>
      </div>
      {FAQs.map(({ title, description }, index) => (
        <Accordion title={title} description={description} key={index} />
      ))}
    </dialog>
  );
}
