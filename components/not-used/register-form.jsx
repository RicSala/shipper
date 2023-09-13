import { z } from "zod"
import { Button } from "../ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Separator } from "../ui/separator"
import { useContext, useState } from "react"
import { useToast } from "../ui/use-toast"
import { useRouter } from "next/navigation"
import { UiContext } from "@/providers/ui/ui-provider"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { config } from "@/shipper.config"



const registerFormSchema = z.object({
    email: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    name: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
    password: z.string().min(2, {
        message: "Password must be at least 2 characters.",
    }),
    confirmPassword: z.string().min(2, {
        message: "Password must be at least 2 characters.",
    }),
})


export function RegisterForm({
}) {


    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const { toast } = useToast()

    const { setSidebarOpen, setLoginModalOpen } = useContext(UiContext)

    const form = useForm({
        resolver: zodResolver(registerFormSchema),

        defaultValues:
        {
            email: 'ricardo@google.com',
            name: 'Ricardo Sala',
            password: '88888888',
            confirmPassword: '88888888'
        }
    });


    const onSubmit = async (data) => {
        setIsLoading(true);
        axios.post('/api/register', data)
            .then((res) => {
                setLoginModalOpen(false);
                setSidebarOpen(false)

                toast({
                    title: `Bienvenido a ${config.general.appName}`,
                    description: `${config.strings.toasts.welcomeToastMessage}`
                })
                signIn('credentials', {
                    email: data.email,
                    password: data.password,
                    // callbackUrl: `${window.location.origin}/dashboard`,
                });
            })
            .catch((err) => {
                toast({
                    title: "Error creando usuario",
                    description: "Por favor, inténtalo de nuevo",
                    variant: "destructive"
                })
                console.log("ERROR:", err.response?.data.error);
                console.log("ERROR:", err);
            })
            .finally(() => {
                setIsLoading(false);
            })
    };

    return (
        <div className='flex flex-col gap-4'>
            <div className='text-center'>
                <div className="text-2xl font-bold">{`Bienvenido a ${config.general.appName}`}</div>
                <div className="mt-2 font-light text-neutral-500">Crea tu cuenta</div>
            </div>

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>e-mail</FormLabel>
                                <FormControl>
                                    <Input placeholder="Aquí va tu email" {...field} />
                                </FormControl>
                                {/* <FormDescription>
                                    Email con el que te diste de alta en TATTUO
                                </FormDescription> */}
                                <FormMessage />
                            </FormItem>
                        )} />
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Nombre</FormLabel>
                                <FormControl>
                                    <Input placeholder="Aquí va tu nombre" {...field} />
                                </FormControl>
                                {/* <FormDescription>
                                    Para hacer todo un poco más personal!
                                </FormDescription> */}
                                <FormMessage />
                            </FormItem>
                        )} />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Contraseña</FormLabel>
                                <FormControl>
                                    <Input placeholder="Aquí va tu contraseña" {...field} type="password" />
                                </FormControl>
                                {/* <FormDescription>
                                    Si no la recuerdas, escríbenos a hello@tattuo.com.
                                </FormDescription> */}
                                <FormMessage />
                            </FormItem>
                        )} />
                    <FormField
                        control={form.control}
                        name="confirmPassword"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Confirma tu contraseña</FormLabel>
                                <FormControl>
                                    <Input placeholder="Aquí va tu contraseña" {...field} type="password" />
                                </FormControl>
                                {/* <FormDescription>
                                    Así te aseguras que la has escrito bien.
                                </FormDescription> */}
                                <FormMessage />
                            </FormItem>
                        )} />
                    <Button type="submit">Registrar</Button>

                </form>
            </Form>

            <Separator />
            <div className="flex flex-col items-center space-y-2">
                <h4>También puedes acceder con</h4>
                <Button variant="outline" className="w-full"
                    onClick={() => { signIn('google') }}
                >
                    {
                        //TODO: review callback después de logearse con google 
                    }
                    Google
                </Button>
            </div>

        </div>
    );
}
