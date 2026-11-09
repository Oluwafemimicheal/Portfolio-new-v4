import { ArrowRight } from "lucide-react"
import { Button } from "../ui/button"


const links = [
  {
    id: "project",
    title: "Project"
  },
  {
    id: "how-i-work",
    title: "How i work"
  },
  {
    id: "faq",
    title: "FAQ's"
  },
  {
    id: "contact",
    title: "Contact"
  }
]

const Footer = () => {
  return (
    <section id="footer" className="pt-20">
      <div className="px-5 lg:w-300 mx-auto flex flex-col justify-between gap-5 lg:h-140 h-auto border p-5 mb-5">
        <div className="flex lg:flex-row flex-col justify-between gap-10 border-b pb-10">
          <div className="w-full">
            <h2 className="uppercase text-2xl font-semibold">Ready to build something better?</h2>
            <p className="text-muted-foreground uppercase text-sm">Let's turn your ideas into a reliable digital product that's built for performance, scalability, and long-term success.</p>

            <Button variant="secondary" className={"mt-20"}><ArrowRight /> Start your project</Button>
          </div>
          <div className="w-full flex justify-end items-start">
            <div className="inline-flex items-center gap-2 uppercase text-xs"><div className="w-2 h-2 rounded-full bg-accent-foreground"></div>Let's build together</div>
          </div>
        </div>

        <div className="flex lg:flex-row flex-col justify-between items-start h-full">
          <div className="w-full py-5">
            <h5 className="lg:text-lg text-white mb-3">Resources</h5>
            <ul className="text-muted-foreground text-sm lg:space-y-2 lg:block flex items-center gap-5 ">
              {
                links.map((link) => (
                  <li key={link.id}><a href={`#${link.id}`}>{link.title}</a></li>
                ))
              }
            </ul>
          </div>

          <div className="border rounded-sm h-full w-full p-5">
            <div className="pb-5 border-b">
              <div className="inline-flex items-center gap-2 uppercase text-xs"><div className="w-2 h-2 rounded-full bg-accent-foreground"></div>Stay connect</div>

              <ul className="flex justify-between items-center lg:mt-20 mt-10 text-xs">
                <li className="text-muted-foreground uppercase">Facebook</li>
                <li className="text-muted-foreground uppercase">Linked-In</li>
                <li className="text-muted-foreground uppercase">Github</li>
                <li className="text-muted-foreground uppercase">X-twitter</li>
              </ul>
            </div>

            <div className="flex items-end mt-14">
              <p className="text-muted-foreground text-xs">&copy; Devs Oluwafemi Michael {new Date().getFullYear()}. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
