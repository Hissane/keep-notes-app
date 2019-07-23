const notes = [
  {
    title: "Amazon Web Services",
    body: "Amazon Web Services (AWS) is a subsidiary of Amazon that provides on-demand cloud computing platforms to individuals, companies, and governments, on a metered pay-as-you-go basis. In aggregate, these cloud computing web services provide a set of primitive abstract technical infrastructure and distributed computing building blocks and tools. One of these services is Amazon Elastic Compute Cloud, which allows users to have at their disposal a virtual cluster of computers, available all the time, through the Internet. AWS's version of virtual computers emulate most of the attributes of a real computer including, hardware central processing units (CPUs) and graphics processing units (GPUs) for processing, local/RAM memory, hard-disk/SSD storage); a choice of operating systems; networking; and pre-loaded application software such as web servers, databases, customer relationship management (CRM), etc.",
    createdAt: "2019-06-15"
  },
  {
    title: "Microsoft Azure",
    body: "Microsoft Azure (formerly Windows Azure /ˈæʒər/) is a cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services through Microsoft-managed data centers. It provides software as a service (SaaS), platform as a service (PaaS) and infrastructure as a service (IaaS) and supports many different programming languages, tools and frameworks, including both Microsoft-specific and third-party software and systems.",
    createdAt: "2018-11-29"
  },
  {
    title: "Git",
    body: "Git is a distributed version-control system for tracking changes in source code during software development.[8] It is designed for coordinating work among programmers, but it can be used to track changes in any set of files. Its goals include speed,[9] data integrity,[10] and support for distributed, non-linear workflows.[11]. Git was created by Linus Torvalds in 2005 for development of the Linux kernel, with other kernel developers contributing to its initial development.[12] Its current maintainer since 2005 is Junio Hamano.",
    createdAt: "2019-02-1"
  },
  {
    title: "Docker",
    body: "Docker is a set of coupled software-as-a-service and platform-as-a-service products that use operating-system-level virtualization to develop and deliver software in packages called containers.[clarification needed][6] The software that hosts the containers is called Docker Engine.[7] It was first started in 2013 and is developed by Docker, Inc.[8] The service has both free and premium tiers.",
    createdAt: "2017-04-03"
  }
];

const makeCard = note => {
  return (
    `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${note.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${note.createdAt}</h6>
        <p class="card-text">${note.body}</p>
        <a href="#" class="btn btn-dark">Check Note</a>
      </div>
    </div>`
  );
}

$(window).on("load", () => {
  const notesDeck = $("#notes");
  for (let i = 0; i < notes.length; i++) {
    const tag = makeCard(notes[i]);
    notesDeck.append(tag);
  }
});