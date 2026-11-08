
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion"

const faq = [
  {
    question: "What kind of projects do you work on?",
    answer: "I work on startup projects, and also work on existing projects.",
    value: "kind"
  },
  {
    question: "Can you work on my existing website or application?",
    answer: "Yes, I do work on existing projects like, website, e-commerce platform, and web application, both frontend and backend",
    value: "existing"
  },
  {
    question: "How do you make sure everything work properly?",
    answer: "Every feature is be carefully tested before delivery to ensure it's fast, secure and work in the way your users expected.",
    value: "properly"
  },
  {
    question: "Will my project be able to grow in the future?",
    answer: "Yes, All projects will be build based on scalability for future improvement.",
    value: "grow"
  },
  {
    question: "How do will get started?",
    answer: " By scheduling a meeting to take note on what can of project we are building.",
    value: "started"
  },
  {
    question: "Will i received update doing the project?",
    answer: "Definitely yes, every journey to the success of the project will be shared with the client, for better supervision.",
    value: "update"
  }
]

const Faq = () => {
  return (
    <section className="py-20 ">
      <div className="w-300 mx-auto flex justify-between gap-5 h-160">

        <div className="w-full grow flex flex-col justify-between h-full">
          <div className="grow space-y-2">
            <div className="inline-flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent-foreground"></div>Unique products flow</div>
            <h2 className="text-3xl font-bold">FAQ'<span className="text-xl">S</span></h2>
          </div>
          <div>
            <p>Have questions about working together? Here are some quick answers to help you understand my process, service, and what
              you can expect.
            </p>
          </div>
        </div>


        <div className="w-full">
          <div className="flex items-center justify-end gap-2"><span className="w-2 h-2 rounded-full bg-accent-foreground"></span>Most Common Questions</div>

          <div className="mt-20">
            <Accordion defaultValue={["kind"]} className="max-w-xl space-y-2">
              {
                faq.map((info, index) => (
                  <AccordionItem key={index} value={info.value} className="border px-2 rounded-sm">
                    <div className="">
                      <AccordionTrigger>{info.question}</AccordionTrigger>
                      <AccordionContent className={"text-muted-foreground"}>
                        {info.answer}
                      </AccordionContent>
                    </div>
                  </AccordionItem>
                ))
              }
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq
