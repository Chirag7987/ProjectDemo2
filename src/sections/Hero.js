import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { status: sessionStatus } = useSession();
  const [showMenu, setMenuVisibility] = useState(false);

  const toggleMenu = () => setMenuVisibility(!showMenu);
  const { t } = useTranslation();

  return (
    <div className="w-full py-10">
      <div className="relative flex flex-col px-10 mx-auto space-y-5 md:w-3/4">
        <header className="flex items-center justify-between space-x-3">
          <Link href="/" className="text-2xl font-bold">
            Nextacular
          </Link>
          <button className="md:hidden" onClick={toggleMenu}>
            {!showMenu ? (
              <Bars3Icon className="w-8 h-8" />
            ) : (
              <XMarkIcon className="w-8 h-8" />
            )}
          </button>
          <div
            className={[
              'items-center justify-center md:flex-row md:flex md:relative md:bg-transparent md:shadow-none md:top-0 md:backdrop-blur-none md:space-x-3',
              showMenu
                ? 'absolute z-50 flex flex-col py-5 space-x-0 rounded shadow-xl md:py-0 left-8 right-8 bg-white top-24 space-y-3 md:space-y-0 px-5'
                : 'hidden',
            ].join(' ')}
          >
            <nav className="flex flex-col w-full space-x-0 space-y-3 text-center md:space-y-0 md:space-x-3 md:flex-row">
              <a className="px-5 py-2 rounded hover:bg-gray-100">{t("common.label.guides")}</a>
              <a className="px-5 py-2 rounded hover:bg-gray-100">{t("common.label.pricing")}</a>
              <a className="px-5 py-2 rounded hover:bg-gray-100">{t("common.label.blog")}</a>
            </nav>
            <Link
              href={
                sessionStatus === 'authenticated' ? '/account' : '/auth/login'
              }
              className="w-full px-5 py-2 text-center text-white bg-blue-600 rounded shadow hover:bg-blue-500"
            >
              {sessionStatus === 'authenticated' ? 'Go to Dashboard' : 'Login'}
            </Link>
          </div>
        </header>
        <div className="flex flex-col items-center justify-center pt-10 mx-auto md:w-3/5">
          <h2 className="text-sm font-bold text-blue-800 uppercase">Platform Features</h2>
          <h1 className="text-4xl font-extrabold text-center md:text-5xl">
            Bubble: The no-code app development platform for everyone
          </h1>
          <p className="mt-5 text-center text-gray-600">
            Bubble's full-stack platform gives you everything you need to build and design powerful
            web and mobile apps – without code. With wide-ranging features including a
            straightforward drag-and-drop editor, pre-built components, an AI page generator, and
            built-in database and logic functionality, it’s quicker than ever to build secure, professional
            applications.
          </p>
          <p className="mt-3 text-center text-gray-600">
            Plus, Bubble scales with you as you grow. So whether you start as an enterprise team or a
            solo founder, Bubble has your back.
          </p>
        </div>
        <div className="flex items-center justify-center space-x-5">
          <a
            className="px-8 py-3 text-center text-white bg-blue-700 rounded-md shadow-md hover:bg-blue-800"
            href="#"
          >
            Get started for free
          </a>
        </div>

        {/* Logos Section */}
        <div className="flex flex-wrap items-center justify-center mt-10 space-x-8">
          <img
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fmeta-l.cdn.bubble.io%2Ff1697834519785x315665519769735550%2FLoreal%2520Logo.png?w=128&h=24&auto=compress&dpr=1.25&fit=max"
            alt="L'Oréal"
            className="h-6"
          />
          <img
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fmeta-l.cdn.bubble.io%2Ff1697834551040x576528351215889200%2FVeed.io%2520Logo.png?w=128&h=24&auto=compress&dpr=1.25&fit=max"
            alt="Veed.io"
            className="h-6"
          />
          <img
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fmeta-l.cdn.bubble.io%2Ff1697834557497x274079117813272450%2FLyft%2520Logo.png?w=96&h=68&auto=compress&dpr=1.25&fit=max"
            alt="Lyft"
            className="h-6"
          />
          <img
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fmeta-l.cdn.bubble.io%2Ff1697834564167x825754566919512000%2FRappi%2520Logo.png?w=128&h=55&auto=compress&dpr=1.25&fit=max"
            alt="Rappi"
            className="h-6"
          />
          <img
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fmeta-l.cdn.bubble.io%2Ff1697834571068x830561794285677600%2FHubspot%2520Logo.png?w=128&h=37&auto=compress&dpr=1.25&fit=max"
            alt="HubSpot"
            className="h-6"
          />
          <img
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fmeta-l.cdn.bubble.io%2Ff1697834577667x211113252518851700%2FVMWare%2520Logo.png?w=128&h=21&auto=compress&dpr=1.25&fit=max"
            alt="VMware"
            className="h-6"
          />
          <img
            src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fmeta-l.cdn.bubble.io%2Ff1697834584396x821963342878631700%2FZendesk%2520Logo.png?w=128&h=25&auto=compress&dpr=1.25&fit=max"
            alt="Zendesk"
            className="h-6"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
