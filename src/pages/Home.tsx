import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../components/ProjectCard';
import Testimonial from '../components/Testimonial';
import LuniImage from '../Luni.png';
import LuniCommunityImage from '../LuniCommunity.png';
import ExcelLogoImage from '../Excel Logo.png';

const Home: React.FC = () => {
  const projects = [
    {
      title: 'Luni',
      description: 'A budgeting app for students, designed to help manage expenses and plan finances effectively.',
      imageUrl: LuniImage,
      link: 'https://luni.app',
    },
    {
      title: 'Luni Community',
      description: 'A community-driven platform connecting founders with the resources they need to succeed.',
      imageUrl: LuniCommunityImage,
      link: 'https://lunicommunity.com',
    },
    {
      title: 'Excel Budget Template',
      description: 'An easy-to-use Excel budget template to help you manage your finances and track expenses.',
      imageUrl: ExcelLogoImage,
      link: 'https://rorygeddes.github.io/budget-template/excel-budget-template.xlsx',
    },
  ];

  const testimonials = [
    {
      quote: 'Rory is a brilliant developer with a vision for creating impactful products. His dedication to solving real problems is inspiring.',
      name: 'Jane Smith',
      title: 'Tech Entrepreneur',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      quote: 'Working with Rory was a game-changer for our project. His technical skills combined with business acumen make him a unique talent.',
      name: 'Alex Johnson',
      title: 'Product Manager',
      imageUrl: 'https://via.placeholder.com/150',
    },
    {
      quote: 'Rory has an exceptional ability to understand user needs and translate them into elegant solutions. A true visionary in the making.',
      name: 'Sam Williams',
      title: 'Angel Investor',
      imageUrl: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
            {/* Profile Image Column */}
            <div className="flex justify-center mb-8 md:mb-0">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-accent shadow-lg relative">
                <img 
                  src={`${process.env.PUBLIC_URL}/profile.png`}
                  alt="Rory Geddes" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/400?text=Rory+Geddes";
                  }}
                />
              </div>
            </div>
            
            {/* Text Content Column */}
            <div className="text-center md:text-left max-w-lg">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Building the Future, One Project at a Time
              </h1>
              <p className="mb-8 text-xl text-gray-600">
                Finance + Computer Science student, developer, and founder creating products that matter.
              </p>
              <Link to="/invest" className="btn">
                Why you should invest in my journey
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Compact About Me Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold mb-4 text-center">About Me</h2>
            <div className="space-y-4">
              <p className="text-lg">
                Hi I'm Rory Geddes — a creative thinker, passionate about integrating technology into everything I do. I love blending strategy, innovation, and design to bring bold ideas to life and solve real problems. This space is where I share my journey, build in public, and invite you to be part of what's next.
              </p>
              <div className="flex justify-between items-center">
                <div className="bg-gray-50 rounded-lg p-3 flex-1 mr-3">
                  <h3 className="text-sm font-semibold uppercase text-gray-500">EDUCATION</h3>
                  <p>Finance major, Computer Science minor</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-3 flex-1">
                  <h3 className="text-sm font-semibold uppercase text-gray-500">LOCATION</h3>
                  <p>Halifax, Nova Scotia</p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-2 pt-2">
                <div className="flex flex-wrap justify-center gap-2 w-full mb-2">
                  <span className="px-4 py-2 bg-white text-[#6366F1] border border-[#6366F1] rounded-md text-sm font-medium">Finance</span>
                  <span className="px-4 py-2 bg-white text-[#6366F1] border border-[#6366F1] rounded-md text-sm font-medium">Web Development</span>
                  <span className="px-4 py-2 bg-white text-[#6366F1] border border-[#6366F1] rounded-md text-sm font-medium">Entrepreneurship</span>
                  <span className="px-4 py-2 bg-white text-[#6366F1] border border-[#6366F1] rounded-md text-sm font-medium">Hockey</span>
                  <span className="px-4 py-2 bg-white text-[#6366F1] border border-[#6366F1] rounded-md text-sm font-medium">Prompting</span>
                  <span className="px-4 py-2 bg-white text-[#6366F1] border border-[#6366F1] rounded-md text-sm font-medium">Blockchain</span>
                </div>
                <div className="flex flex-wrap justify-center gap-2 w-full">
                  <span className="px-4 py-2 bg-white text-[#6366F1] border border-[#6366F1] rounded-md text-sm font-medium">Excel</span>
                  <span className="px-4 py-2 bg-white text-[#6366F1] border border-[#6366F1] rounded-md text-sm font-medium">AI</span>
                  <span className="px-4 py-2 bg-white text-[#6366F1] border border-[#6366F1] rounded-md text-sm font-medium">Frisbee</span>
                  <span className="px-4 py-2 bg-white text-[#6366F1] border border-[#6366F1] rounded-md text-sm font-medium">Golf</span>
                  <span className="px-4 py-2 bg-white text-[#6366F1] border border-[#6366F1] rounded-md text-sm font-medium">Skiing</span>
                  <span className="px-4 py-2 bg-white text-[#6366F1] border border-[#6366F1] rounded-md text-sm font-medium">Investing</span>
                  <span className="px-4 py-2 bg-white text-[#6366F1] border border-[#6366F1] rounded-md text-sm font-medium">Travel</span>
                  <span className="px-4 py-2 bg-white text-[#6366F1] border border-[#6366F1] rounded-md text-sm font-medium">Cooking</span>
                  <span className="px-4 py-2 bg-white text-[#6366F1] border border-[#6366F1] rounded-md text-sm font-medium">Working Out</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What I'm Building Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-3xl font-bold text-center">What I'm Building</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                link={project.link}
              />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/projects" className="px-6 py-2 font-medium text-accent hover:text-gray-900">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* Live Updates Section */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="mb-8 text-3xl font-bold text-center">Latest Updates</h2>
          <div className="max-w-3xl mx-auto">
            <div className="p-6 mb-6 bg-white rounded shadow">
              <h3 className="mb-2 text-xl font-bold">Setup Buymeacoffee account for support payments!</h3>
              <p className="mb-2 text-sm text-gray-500">Posted on April 12, 2025</p>
              <p className="text-gray-700">
                Excited to announce that I've set up a Buy Me A Coffee account to make supporting my projects easier than ever. Now you can directly contribute to my work with just a few clicks!
              </p>
            </div>
            <div className="p-6 mb-6 bg-white rounded shadow">
              <h3 className="mb-2 text-xl font-bold">Bought Luni.dev Domain</h3>
              <p className="mb-2 text-sm text-gray-500">Posted on April 9, 2025</p>
              <p className="text-gray-700">
                Working on the backend to release it... Stay tuned for more updates!
              </p>
            </div>
            <div className="text-center">
              <Link 
                to="/updates" 
                className="px-6 py-2 font-medium text-accent hover:text-gray-900"
              >
                View All Updates →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container">
          <h2 className="mb-12 text-3xl font-bold text-center">What People Say</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <Testimonial
                key={index}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                imageUrl={testimonial.imageUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Buy Me a Coffee Section */}
      <section className="py-16 bg-gray-50">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="mb-6 text-3xl font-bold">Support My Work</h2>
            <p className="mb-8 text-xl text-gray-600">
              If you find my projects helpful or interesting, consider buying me a coffee. Your support helps me continue building useful tools and resources.
            </p>
            <a 
              href="https://buymeacoffee.com/rorygeddes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 text-lg font-medium text-white transition-colors duration-300 rounded-md bg-yellow-500 hover:bg-yellow-600"
            >
              <svg className="w-6 h-6 mr-2" viewBox="0 0 884 1279" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M791.109 297.518L790.231 297.002L788.201 296.383C789.018 297.072 790.04 297.472 791.109 297.518Z" fill="white"/>
                <path d="M803.896 388.891L802.916 389.166L803.896 388.891Z" fill="white"/>
                <path d="M791.484 297.377C791.359 297.361 791.237 297.332 791.118 297.29C791.111 297.371 791.111 297.453 791.118 297.534C791.252 297.516 791.379 297.462 791.484 297.377Z" fill="white"/>
                <path d="M791.113 297.529H791.244V297.447L791.113 297.529Z" fill="white"/>
                <path d="M803.111 388.726L804.591 387.883L805.142 387.573L805.641 387.28C804.702 387.441 803.846 388.055 803.111 388.726Z" fill="white"/>
                <path d="M793.669 299.515L792.223 298.138L791.243 297.605C791.77 298.535 792.641 299.221 793.669 299.515Z" fill="white"/>
                <path d="M430.019 1186.18C428.864 1186.68 427.852 1187.46 427.076 1188.45L427.988 1187.87C428.608 1187.3 429.485 1186.63 430.019 1186.18Z" fill="white"/>
                <path d="M641.187 1144.63C641.187 1144.63 641.187 1144.63 641.187 1144.63L641.187 1144.63Z" fill="white"/>
                <path d="M619.284 1186.18C618.129 1186.68 617.118 1187.46 616.342 1188.45L617.254 1187.87C617.873 1187.3 618.751 1186.63 619.284 1186.18Z" fill="white"/>
                <path d="M281.304 1196.06C280.427 1195.3 279.354 1194.8 278.207 1194.61C279.136 1195.06 280.065 1195.51 280.684 1195.85L281.304 1196.06Z" fill="white"/>
                <path d="M247.841 1164.01C247.704 1162.66 247.288 1161.35 246.619 1160.16C247.093 1161.39 247.489 1162.66 247.806 1164.01H247.841Z" fill="white"/>
                <path d="M472.623 590.836C426.682 610.617 374.546 632.306 318.607 632.306C262.669 632.306 201.356 608.733 161.544 578.786C261.417 578.429 352.42 566.948 435.979 535.491C464.7 522.604 490.778 504.821 511.191 482.935C531.603 461.05 546.005 435.509 553.534 407.812C562.164 375.656 581.392 347.892 609.164 329.492C636.937 311.092 670.925 303.318 703.755 307.982C736.585 312.647 766.604 329.367 787.6 354.976C808.596 380.585 818.844 412.939 816.366 445.705C810.088 522.571 763.865 580.045 691.631 590.119C658.431 594.669 608.428 588.285 572.765 571.305C520.747 546.915 500.887 517.117 472.623 590.836Z" fill="white"/>
                <path d="M789.737 297.353C788.625 295.93 787.281 294.728 785.777 293.804C785.777 293.804 731.129 251.714 624.067 292.642C631.921 296.333 639.157 301.276 645.429 307.275C647.48 309.174 649.408 311.294 651.196 313.608C652.983 315.922 654.622 318.413 656.095 321.049C657.828 324.494 659.13 328.143 659.971 331.921C673.235 377.703 646.358 423.041 591.806 424.591C549.636 425.483 514.22 401.866 509.704 361.635C508.202 347.868 513.258 331.658 523.371 319.608C527.131 316.112 531.138 312.879 535.361 309.934C548.416 299.703 573.26 290.654 601.524 290.166C615.485 289.925 629.456 290.92 643.214 293.134C643.73 293.134 644.093 293.134 644.093 293.134C572.637 275.259 514.846 276.154 471.863 297.291C460.255 276.154 469.65 222.091 469.65 222.091C469.65 222.091 453.684 132.765 373.079 117.022C330.533 108.092 286.501 132.765 227.534 162.172C192.686 180.771 148.891 212.53 105.982 261.951C44.6606 334.685 13.7171 413.856 8.162 493.389C3.62211 565.219 31.5803 639.484 82.5485 713.548C93.2551 729.849 113.463 755.682 133.671 781.153L67.9523 798.974C54.4438 803.111 36.2165 811.111 30.4598 834.685C27.101 848.592 31.1855 874.806 60.8282 898.855C91.7476 923.393 147.773 941.681 217.992 941.681C272.881 941.681 338.28 931.426 407.969 915.29C421.116 912.014 440.536 907.303 440.536 907.303C440.536 907.303 448.001 925.334 448.366 939.484C448.731 953.273 451.003 981.8 457.976 1000.33C462.937 1012.89 469.469 1023.95 479.114 1032.26C487.301 1039.21 497.619 1044.25 509.217 1046.87C527.153 1050.15 570.135 1050.15 604.983 1050.15H733.831C741.739 1070.2 746.423 1095.92 746.423 1125.49C746.423 1140.76 746.058 1154.55 743.786 1168.22C743.786 1168.22 698.909 1176.28 668.711 1176.28C603.677 1176.28 564.107 1158.48 564.107 1128.28C564.107 1119.73 566.744 1111.79 573.717 1104.11C584.789 1091.68 607.812 1087.45 616.295 1086.27C622.176 1084.37 626.417 1078.77 626.417 1072.39C626.417 1066.93 621.939 1062.45 616.48 1062.45H429.488C422.15 1062.45 417.796 1056.5 419.555 1049.35C419.555 1049.35 430.384 1017.89 414.418 989.119C414.418 989.119 301.993 1108.89 108.619 1059.11C81.6553 1051.65 5.89437 1019.27 0.833372 958.389C-2.86647 913.966 25.5589 881.705 65.8585 876.5C112.222 870.809 142.056 883.119 160.556 892.044C179.055 900.969 209.255 918.651 218.236 937.918C219.142 939.812 220.098 942.198 217.992 942.815C208.526 945.809 188.217 954.603 182.976 971.151C182.976 971.151 179.42 984.817 188.521 989.119C200.687 994.94 232.695 994.94 253.389 989.119C274.083 983.298 289.171 972.558 297.343 957.76C305.538 942.922 298.383 928.237 286.216 920.361C286.216 920.361 266.008 906.673 243.802 906.673C219.384 906.673 203.053 917.048 193.587 930.372C193.587 930.372 176.429 952.684 212.192 973.609C226.64 981.312 272.517 992.172 335.704 992.172C398.891 992.172 458.585 971.151 499.303 934.07C520.727 913.818 535.361 885.654 543.533 846.525C551.705 807.397 551.705 745.323 551.705 745.323L628.689 713.304C628.689 713.304 648.897 754.744 657.886 775.209C666.875 795.675 683.328 824.672 688.569 838.843C696.376 860.098 695.159 881.353 688.569 889.594C682.221 897.548 670.539 904.405 651.675 904.405C633.516 904.405 614.387 894.46 594.179 878.135C578.577 865.299 564.472 845.321 549.956 827.334C543.169 818.994 524.62 798.529 513.258 785.57C507.651 779.261 499.997 776.267 493.149 776.267C485.366 776.267 478.383 779.749 473.914 785.57C469.42 791.43 467.988 798.651 470.174 805.358C473.426 815.621 482.478 835.599 496.684 864.621C505.735 882.826 517.58 906.639 530.819 935.599C538.383 952.927 553.78 971.151 569.382 983.014C585.689 995.574 607.813 1001.31 609.233 1001.68C610.653 1002.05 662.137 1016.58 663.557 1016.95C673.873 1018.19 705.881 1022.48 735.251 1022.48C764.621 1022.48 788.399 1021.98 805.557 1017.68C829.335 1011.86 844.423 1000.74 853.046 990.362C862.177 979.483 864.812 968.117 864.812 956.992C864.812 932.152 844.06 909.424 829.335 896.831C814.974 884.443 803.651 875.372 792.693 866.428C781.7 857.511 773.527 848.957 759.38 835.512C760.039 834.953 760.648 834.363 761.211 833.744C784.506 809.842 797.207 774.438 801.965 734.96C805.921 702.796 803.286 660.391 796.327 625.585C793.086 609.042 785.157 579.449 782.644 571.305C782.644 571.305 790.816 561.538 803.043 554.39C814.977 547.472 828.598 543.243 842.879 542.104C881.509 538.927 896.232 567.98 896.232 591.845C896.232 615.71 878.145 678.369 850.501 711.915C835.806 729.864 818.383 738.198 794.17 738.198C783.5 738.198 772.708 736.253 762.096 733.071C755.184 731.027 744.9 726.585 739.292 723.671C737.872 722.793 736.452 723.842 735.251 724.721C732.411 726.585 729.229 729.864 727.809 733.071C726.389 736.278 728.049 737.614 730.081 738.198C730.081 738.198 750.289 744.019 769.527 746.079C788.764 748.138 825.912 745.106 856.593 724.721C856.593 724.721 905.221 691.615 918.398 619.764C918.398 619.764 931.575 556.449 900.529 507.764C869.483 459.079 831.36 436.426 774.768 436.816C721.967 437.181 683.673 464.9 665.325 473.337C646.977 481.774 607.713 507.764 594.536 525.533C581.359 543.303 574.091 561.538 572.671 574.252C568.585 584.873 565.08 596.19 562.245 608.064C558.368 624.585 556.125 643.351 555.92 662.208C555.92 662.208 552.765 740.257 602.944 781.697C618.181 794.391 640.142 802.338 665.325 806.091C690.507 809.845 718.662 803.291 746.423 790.211C774.184 777.131 776.553 773.011 784.118 767.555C791.682 762.099 825.817 734.96 833.382 728.775C840.946 722.589 858.013 706.091 867.781 696.91C875.758 689.347 881.899 680.523 885.932 669.972C892.102 652.664 891.906 642.629 892.389 626.95C894.965 552.933 875.344 485.172 834.216 436.328C809.399 406.972 775.749 387.89 739.292 380.354C691.927 370.587 657.886 386.011 657.886 386.011C657.886 386.011 655.051 387.584 654.581 389.156C654.111 390.729 654.581 393.388 657.886 393.388C657.886 393.388 702.763 408.984 718.142 440.51C727.3 459.347 722.059 502.308 722.059 502.308L703.702 511.831C703.702 511.831 672.065 420.923 625.487 357.608C625.487 357.608 517.702 185.252 270.547 213.493C270.547 213.493 110.951 229.333 32.2778 365.1C-0.183208 429.683 -8.47089 503.53 7.68862 573.121C24.1236 643.935 66.0439 702.186 126.107 740.257C172.358 769.029 229.148 782.11 286.631 776.803C343.266 771.524 396.292 748.332 437.398 710.83C475.895 675.75 508.932 627.36 535.36 567.492C535.36 567.492 628.689 369.612 704.252 347.889C733.09 339.307 755.926 337.212 772.971 345.942C789.429 354.379 799.48 368.283 803.896 388.891C808.58 410.567 803.286 433.806 792.693 457.02C784.52 474.79 769.527 481.774 741.181 470.192C712.835 458.61 675.158 465.595 658.09 472.09C658.09 472.09 617.885 488.334 616.08 523.229C614.66 549.219 639.785 562.417 656.853 564.987C673.92 567.557 710.055 564.987 745.003 532.37C745.003 532.37 791.3 478.256 795.601 409.201C797.021 383.701 796.327 351.084 775.153 323.945C753.978 296.807 715.634 289.823 682.503 299.59C649.372 309.358 600.744 318.636 551.706 345.942C502.668 373.249 467.189 450.525 467.189 450.525L307.593 573.364C307.593 573.364 268.759 599.354 251.691 615.71C234.624 632.066 226.451 647.009 222.15 664.778C209.742 713.304 242.873 762.138 302.781 791.464C358.254 819.011 422.393 830.551 462.128 833.243C501.862 835.935 529.139 833.487 554.321 827.302C579.503 821.116 597.98 811.837 614.66 805.163C631.34 798.489 668.711 781.697 694.774 773.011C720.836 764.326 753.967 733.071 756.329 698.482C758.692 663.892 742.036 629.058 697.159 597.803C652.282 566.548 582.779 536.58 582.779 536.58L569.602 535.193C584.199 515.169 592.371 495.145 595.956 474.87C600.257 451.892 597.067 431.627 592.766 414.902C587.525 393.388 566.351 348.866 566.351 348.866C566.351 348.866 601.524 338.61 625.487 371.672C649.45 404.735 660.811 462.17 663.086 476.018C665.36 489.866 673.533 556.449 717.47 561.294C739.584 563.648 766.069 553.88 779.246 549.463C779.246 549.463 811.906 535.681 833.382 521.116C854.857 506.55 872.854 471.961 872.854 471.961C872.854 471.961 896.232 431.627 896.232 395.447C896.232 359.267 891.481 321.619 862.177 293.804C832.873 265.989 789.737 297.353 789.737 297.353Z" fill="#FFDD00"/>
              </svg>
              Buy Me a Coffee
            </a>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section className="py-16 text-white bg-accent">
        <div className="container text-center">
          <h2 className="mb-6 text-3xl font-bold">Join My Journey</h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl">
            Be part of something exciting. Invest in the future and follow along as we build products that make a difference.
          </p>
          <Link to="/invest" className="px-8 py-3 font-medium text-accent bg-white rounded-md hover:bg-gray-100">
            Why you should invest in my journey
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home; 