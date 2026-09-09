export type ProjectStatus = "Selesai" | "Dalam Proses"

export interface Profile {
  name: string
  email: string
  role: string
  intro: string
  about: string
}

export interface SkillCluster {
  name: string
  skills: string[]
}

export interface ProjectItem {
  title: string
  tech: string
  description: string
  status: ProjectStatus
  image: "project_c" | "flashscore_clone" | "movie_project" | "profile_web" | "ecommerce"
}

export const profile: Profile = {
  name: "Fadllan Rizky",
  email: "fadllanrizky321@gmail.com",
  role: "Frontend Developer & Computer Science Enthusiast",
  intro:
    "Saya membangun website modern yang responsif, ringan, dan rapi dengan pendekatan UI yang detail serta pengalaman pengguna yang nyaman.",
  about:
    "Saya berfokus pada pengembangan antarmuka web menggunakan React dan TypeScript, serta terus memperluas kemampuan backend melalui Laravel dan Java Spring Boot. Saya menikmati proses mengubah ide menjadi produk digital yang benar-benar berguna, dari konsep desain hingga implementasi teknis.",
}

export const skillClusters: SkillCluster[] = [
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "HTML", "CSS", "Bootstrap"],
  },
  {
    name: "Backend",
    skills: ["Laravel", "Java Spring Boot", "REST API"],
  },
  {
    name: "Tools & Workflow",
    skills: ["Git", "Vite", "UI Design", "Responsive Web"],
  },
]

export const projects: ProjectItem[] = [
  {
    title: "Bimbel Console",
    tech: "C",
    description: "Aplikasi bimbel berbasis console untuk latihan logika pemrograman dasar.",
    status: "Selesai",
    image: "project_c",
  },
  {
    title: "Flashscore Clone",
    tech: "HTML CSS",
    description: "Kloning tampilan platform skor pertandingan dengan struktur layout yang presisi.",
    status: "Selesai",
    image: "flashscore_clone",
  },
  {
    title: "Movie App",
    tech: "React",
    description: "Aplikasi katalog film dengan pencarian dan antarmuka berbasis komponen.",
    status: "Selesai",
    image: "movie_project",
  },
  {
    title: "Web Profile",
    tech: "Laravel Bootstrap",
    description: "Website profil informatif dengan layout responsif dan manajemen konten dasar.",
    status: "Selesai",
    image: "profile_web",
  },
  {
    title: "E-Commerce & Peminjaman",
    tech: "React",
    description: "Simulasi platform e-commerce dan peminjaman dengan alur pengguna yang jelas.",
    status: "Selesai",
    image: "ecommerce",
  },
  {
    title: "Java API",
    tech: "Java Spring Boot",
    description: "Pengembangan API modular untuk kebutuhan backend, saat ini masih berjalan.",
    status: "Dalam Proses",
    image: "ecommerce",
  },
]