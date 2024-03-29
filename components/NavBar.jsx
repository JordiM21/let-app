import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Icon from '@/public/Icon.png'
import IconBig from '@/public/CompleteLogo.png'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Link from 'next/link'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const trackingScript = `
    <script>
      function loadScript(a){
        var b=document.getElementsByTagName("head")[0],c=document.createElement("script");
        c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)
      }
      loadScript(function(){beTracker.t({hash:"e9cfddce966cb8261718327086f45803"})});
    </script>
  `;

export default function Example() {

  const router = useRouter()

  return (
    <Disclosure as="nav" className="bg-[var(--color2)]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[var(--color2Shadow)] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Image src={IconBig} onClick={() => router.push("/")} height={100} width={100} className="block h-8 w-auto lg:hidden cursor-pointer" />
                  <Image src={Icon} onClick={() => router.push("/")} height={100} width={100} className="hidden h-8 w-auto lg:block cursor-pointer" />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <a
                      href={"/Metodo"}
                      className={classNames(
                        router.pathname === "/Metodo" ? ' bg-[#016a7e] text-white' : 'text-gray-300 hover:bg-[var(--color2Shadow)] hover:text-white',
                        'rounded-md px-3 py-2 text-sm'
                      )}
                    >
                      Método
                    </a>
                    <a
                      href={"/Beneficios"}
                      className={classNames(
                        router.pathname === "/Beneficios" ? ' bg-[#016a7e] text-white' : 'text-gray-300 hover:bg-[var(--color2Shadow)] hover:text-white',
                        'rounded-md px-3 py-2 text-sm'
                      )}
                    >
                      Beneficios
                    </a>
                    <a
                      href={"/Niveles"}
                      className={classNames(
                        router.pathname === "/Niveles" ? ' bg-[#016a7e] text-white' : 'text-gray-300 hover:bg-[var(--color2Shadow)] hover:text-white',
                        'rounded-md px-3 py-2 text-sm'
                      )}
                    >
                      Niveles
                    </a>
                  </div>
                </div>
              </div>
              <Link href="https://let-students.vercel.app/" target="_blank">
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <p className='text-white text-sm cursor-pointer hover:bg-[#01697e9b] p-2 bg-[var(--color2Shadow)] rounded-md'>
                    Students
                  </p>
                </div>
              </Link>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden absolute z-10 bg-[var(--color2)] w-full">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <Disclosure.Button
                as="a"
                href="/Metodo"
                className={classNames(
                  router.pathname === "/Metodo" ? ' bg-[#016a7e] text-white' : 'text-gray-300 hover:bg-[var(--color2Shadow)] hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
              >
                Método
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="Beneficios"
                className={classNames(
                  router.pathname === "/Beneficios" ? ' bg-[#016a7e] text-white' : 'text-gray-300 hover:bg-[var(--color2Shadow)] hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
              >
                Beneficios
              </Disclosure.Button>

              <Disclosure.Button
                as="a"
                href="/Niveles"
                className={classNames(
                  router.pathname === "/Niveles" ? ' bg-[#016a7e] text-white' : 'text-gray-300 hover:bg-[var(--color2Shadow)] hover:text-white',
                  'block rounded-md px-3 py-2 text-base font-medium'
                )}
              >
                Niveles
              </Disclosure.Button>

            </div>
          </Disclosure.Panel>
          <div dangerouslySetInnerHTML={{ __html: trackingScript }} />
        </>
      )}
    </Disclosure>
  )
}
