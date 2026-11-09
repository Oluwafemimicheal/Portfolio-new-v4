import { ArrowRight, ChevronRight, Copy, Workflow } from "lucide-react"
import { Badge } from "../ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"

const Hero = () => {
  return (
    <div className="px-5 lg:px-0 lg:w-200 mx-auto flex flex-col justify-center items-center lg:h-160 h-screen text-center space-y-8">
      <Badge variant={"secondary"}><div className="w-2 h-2 rounded-full bg-accent-foreground"></div> Vision</Badge>
      <div className="space-y-2" >
        <h1 className="font-semibold text-2xl lg:text-3xl">I Don't Just Build Frontend / Backends - I Solve the Problems Behind Every User Journey.</h1>
        <p className="text-muted-foreground text-lg">Your users shouldn't have to struggle to use your product. I build the systems behind the scenes that remove common problems.
          Improve speed, and make every interaction feel effortless.
        </p>
      </div>


      <div className="border border-muted-foreground rounded-md">
        <Tabs defaultValue="overview" className="px-5 lg:px-0 lg:w-125">
          <TabsList className={"m-1 bg-transparent!"}>
            <TabsTrigger value="agency">AGENCY MAIL</TabsTrigger>
            <TabsTrigger value="personal">PERSONAL MAIL</TabsTrigger>
          </TabsList>
          <TabsContent value="agency">
            <Card className={"bg-transparent! rounded-none! p-2"}>
              <div className="border border-muted-foreground rounded-md px-3 py-1 inline-flex justify-between items-center text-sm text-muted-foreground">
                <span className="flex items-center"> <ChevronRight className="text-accent-foreground" size={14} /> <p>femi4410@gmail.com</p></span>
                <Button variant="ghost" className="cursor-pointer"><Copy className="text-accent-foreground" size={14}/></Button>
              </div>
            </Card>
          </TabsContent>
          <TabsContent value="personal">
            <Card className={"bg-transparent! rounded-none! p-2"}>
              <div className="border border-muted-foreground rounded-md px-3 py-1 inline-flex justify-between items-center text-sm text-muted-foreground">
                <span className="flex items-center"> <ChevronRight className="text-accent-foreground" size={14} /> <p>oluwafemicu@gmail.com</p></span>
                <Button variant="ghost" className="cursor-pointer"><Copy className="text-accent-foreground" size={14}/></Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      <div className="space-y-5 space-x-5">
        <Button asChild variant="secondary" className="uppercase cursor-pointer"><a href={`#footer`} className="flex items-center gap-2"><Workflow />Start your project</a></Button>
        <Button asChild variant="secondary" className="uppercase cursor-pointer"><a href={`#contact`} className="flex items-center gap-2"><ArrowRight /> Contact Me</a></Button>
      </div>
    </div>
  )
}

export default Hero
