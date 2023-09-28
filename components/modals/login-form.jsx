'use client';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { UiContext } from '@/providers/ui/ui-provider';
import { config } from '@/shipper.config';
import { zodResolver } from '@hookform/resolvers/zod';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import Spinner from '../icons/spinner';
import { Button } from '../ui/button';
import { Dialog, DialogContent } from '../ui/dialog';
import { Input } from '../ui/input';
import { useToast } from '../ui/use-toast';
// import { RegisterForm } from "../not-used/register-form";
import GoogleIcon from '../icons/google-icon';
import { Separator } from '../ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

const signInFormSchema = z.object({
  email: z.string().email({
    message: 'Debe ser un correo válido',
  }),
  password: z.string().min(6, {
    message: 'La contraseña debe tener al menos 6 caracteres',
  }),
  magicLinkEmail: z.string().email({
    message: 'Debe ser un correo válido',
  }),
});

// TODO: Change to magic link??

export function LoginForm({}) {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const { setLoginModalOpen, setSidebarOpen } = useContext(UiContext);

  const form = useForm({
    resolver: zodResolver(signInFormSchema),

    defaultValues: {
      email: 'ricardo@google.com',
      password: '88888888',
      magicLinkEmail: '',
    },
  });

  const handleSignIn = async (signInOptions) => {
    setIsLoading(true);
    try {
      const response = await signIn(signInOptions.type, signInOptions.data);
      if (response.error) {
        toast({ ...signInOptions.errorToast });
      } else {
        router.refresh();
        setLoginModalOpen(false);
        setSidebarOpen(false);
        toast({ ...signInOptions.successToast });
        if (signInOptions.redirectPath) {
          router.push(signInOptions.redirectPath);
        }
      }
    } catch (error) {
      toast({
        title: `Error al entrar`,
        description: 'Algo ha ocurrido. Por favor, inténtalo de nuevo',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onCredentialsSubmit = async (data) => {
    handleSignIn({
      type: 'credentials',
      data: {
        ...data,
        callbackUrl: `${window.location.origin}/dashboard`,
        redirect: false,
      },
      redirectPath: '/dashboard',
      successToast: {
        title: config.strings.toasts.welcomeToastTitle,
        description: config.strings.toasts.welcomeToastDescription,
        variant: 'success',
      },
      errorToast: {
        title: `Error al entrar`,
        description: 'Tus credenciales parecen no ser correctas',
        variant: 'customDestructive',
      },
    });
  };

  const onMagicLinkClick = (data) => {
    console.log({ data });
    handleSignIn({
      type: 'email',
      data: {
        email: data.magicLinkEmail,
        callbackUrl: `${window.location.origin}/`,
        redirect: false,
      },
      successToast: {
        title: config.strings.toasts.linkSentToastTitle,
        description: config.strings.toasts.linkSentToastDescription,
        variant: 'success',
      },
      errorToast: {
        title: `Error al entrar`,
        description: 'Tus credenciales parecen no ser correctas',
        variant: 'customDestructive',
      },
    });
  };

  const renderFormField = (
    name,
    label,
    placeholder,
    description,
    type = 'text'
  ) => (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input
              placeholder={placeholder}
              {...field}
              type={type}
              className='max-w-full text-center'
            />
          </FormControl>
          <FormDescription>{description}</FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  );

  return (
    <div className='flex w-full flex-col gap-4'>
      <div className='text-center'>
        <div className='text-2xl font-bold'>Bienvenidx</div>
        <div className='mt-2 font-light text-neutral-500'>
          Accede a tu cuenta
        </div>
      </div>
      {config.auth.authMethods.credentials && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onCredentialsSubmit)}
            className='space-y-8'
          >
            {renderFormField(
              'email',
              'e-mail',
              'Aquí va tu email',
              `Email con el que te diste de alta en ${config.general.appName}`
            )}
            {renderFormField(
              'password',
              'Contraseña',
              'Aquí va tu contraseña',
              `Si necesites ayuda, escríbenos a ${config.email.supportEmail}`,
              'password'
            )}

            <Button type='submit' disabled={form.formState.isSubmitting}>
              {form.formState.isSubmitting || isLoading ? (
                <div className='flex flex-row gap-2'>
                  Entrando
                  <Spinner />
                </div>
              ) : (
                `Entrar`
              )}
            </Button>
          </form>
        </Form>
      )}

      <Separator />
      <div className='flex w-full flex-col items-center gap-10'>
        <div className='flex w-full flex-col items-center'>
          <h2 className='relative'>
            Email
            <TooltipProvider delayDuration={10}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className='absolute -right-[10px] -top-[3px]  flex h-3 w-3 cursor-help items-center justify-center text-xs text-primary/60'>
                    ?
                  </div>
                </TooltipTrigger>
                <TooltipContent className='border-base-200 bg-base-200 font-light text-base-content'>
                  <p className='font-sans text-base '>
                    Te enviaremos un email con un link para contectarte <br />
                    Así no necesitarás contraseña 😄
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </h2>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onMagicLinkClick)}
              className='w-full'
            >
              {renderFormField('magicLinkEmail', '', 'tuemail@gmail.com')}

              <Button
                Button
                type='submit'
                disabled={form.formState.isSubmitting}
                className='w-full'
              >
                {form.formState.isSubmitting || isLoading ? (
                  <div className='flex flex-row gap-2'>
                    Entrando
                    <Spinner />
                  </div>
                ) : (
                  `Entrar`
                )}
              </Button>
            </form>
          </Form>
        </div>
        <div>
          <Separator />
          <h2 className='mb-5 mt-5'>También puedes acceder con</h2>
          {config.auth.authMethods.google && (
            <>
              <Button
                variant='outline'
                className='flex w-full items-center gap-2'
                onClick={() => {
                  signIn('google');
                }}
              >
                {
                  //TODO: review callback después de logearse con google
                }
                <GoogleIcon />
                Google
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function LoginModal({ variant = 'login' }) {
  const { loginModalOpen, setLoginModalOpen, setArtistRegisterOpen } =
    useContext(UiContext);
  const [variantShown, setVariantShown] = useState(variant);

  return (
    <Dialog
      open={loginModalOpen}
      //TODO: This "use" of open and onOpenChange is what should be done. Review other parts.

      // This is not working as expected...is not deleting the searchParams from the url
      onOpenChange={(isOpen) => {
        // router.push("/")
        setLoginModalOpen(isOpen);
      }}
    >
      <DialogContent>
        {variantShown === 'login' ? (
          <>
            <div className='flex flex-col items-center space-y-2'>
              <LoginForm />
              {config.auth.authMethods.credentials && (
                <p>
                  ¿No tienes cuenta?{' '}
                  <Button
                    variant='ghost'
                    className='inline-block'
                    onClick={() => {
                      setVariantShown('register');
                    }}
                  >
                    ¡Créala!
                  </Button>
                </p>
              )}
            </div>
          </>
        ) : (
          <div className='flex flex-col items-center space-y-2'>
            {/* <RegisterForm /> */}
            <p>
              ¿Ya tienes cuenta?{' '}
              <Button
                variant='ghost'
                className='inline-block'
                onClick={() => {
                  setVariantShown('login');
                }}
              >
                ¡Entra!
              </Button>
            </p>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
