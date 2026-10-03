import type { MetadataRoute } from "next";
import { projects } from "@/content/site";
export default function sitemap():MetadataRoute.Sitemap{const base="https://mayankpaswan.dev";const routes=["","/work","/engineering","/experience","/writing","/about","/resume"];return [...routes.map(route=>({url:`${base}${route}`,lastModified:new Date(),changeFrequency:route===""?"monthly" as const:"yearly" as const,priority:route===""?1:.7})),...projects.map(p=>({url:`${base}/work/${p.slug}`,lastModified:new Date(),changeFrequency:"yearly" as const,priority:.8}))]}
