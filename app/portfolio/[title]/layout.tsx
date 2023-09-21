import "./styles.css";
import type { Metadata} from "next";

export async function generateMetadata(props: {
  params: { title:string };
}): Promise<Metadata> {
  return {
    title:props.params.title.toUpperCase(),
    description: "A project I made on my portfolio featuring " + props.params.title.toUpperCase(),
    alternates:{
      canonical:`https://skudunter-com.vercel.app/portfolio/${props.params.title}`,
      languages:{'en-US':`/en-US/https://skudunter-com.vercel.app/portfolio/${props.params.title}`}
    }
    ,twitter:{
      card:"summary_large_image",
      title:props.params.title.toUpperCase(),
      description:"A project I made on my portfolio featuring " + props.params.title.toUpperCase(),
      creator:'@skudunter',
    }
  };
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {  
  return (
    <main
      className={`mainContainer mx-auto px-20 w-full sm:w-10/12 h-auto bg-tersiary bg-opacity-70 rounded-2xl text-center text-slate-50 py-8`}
    >
      {children}
    </main>
  );
}
