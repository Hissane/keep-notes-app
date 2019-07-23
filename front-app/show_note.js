const note = {
  title: "Amazon Web Services",
  body: "Amazon Web Services (AWS) is a subsidiary of Amazon that provides on-demand cloud computing platforms to individuals, companies, and governments, on a metered pay-as-you-go basis. In aggregate, these cloud computing web services provide a set of primitive abstract technical infrastructure and distributed computing building blocks and tools. One of these services is Amazon Elastic Compute Cloud, which allows users to have at their disposal a virtual cluster of computers, available all the time, through the Internet. AWS's version of virtual computers emulate most of the attributes of a real computer including, hardware central processing units (CPUs) and graphics processing units (GPUs) for processing, local/RAM memory, hard-disk/SSD storage); a choice of operating systems; networking; and pre-loaded application software such as web servers, databases, customer relationship management (CRM), etc. ",
  createdAt: "2019-06-15"
}

$(window).on("load", () => {
  $("#note-title").text(note.title);
  $("#note-body").text(note.body);
  $("#note-created-at").text(`Created at ${note.createdAt}`);
});