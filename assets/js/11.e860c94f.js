(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{352:function(e,t,a){e.exports=a.p+"assets/img/welcome_page.100b3dc2.png"},353:function(e,t,a){e.exports=a.p+"assets/img/installation_summary.84b54949.png"},354:function(e,t,a){e.exports=a.p+"assets/img/installation_source_gray_network.27ea902c.png"},355:function(e,t,a){e.exports=a.p+"assets/img/installation_source_network_address.2477ebd2.png"},356:function(e,t,a){e.exports=a.p+"assets/img/installation_iso_source.6924bcb7.png"},357:function(e,t,a){e.exports=a.p+"assets/img/installation_source_gray_working.8674a127.png"},358:function(e,t,a){e.exports=a.p+"assets/img/installation_source_gray_done.e95e6405.png"},359:function(e,t,a){e.exports=a.p+"assets/img/installation_available.11c6d699.png"},360:function(e,t,a){e.exports=a.p+"assets/img/installation_done.84c286f5.png"},369:function(e,t,a){"use strict";a.r(t);var n=a(32),s=Object(n.a)({},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"installation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installation","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),n("p"),n("div",{staticClass:"table-of-contents"},[n("ul",[n("li",[n("a",{attrs:{href:"#hardware-compatibility"}},[e._v("Hardware compatibility")])]),n("li",[n("a",{attrs:{href:"#fresh-installation"}},[e._v("Fresh installation")]),n("ul",[n("li",[n("a",{attrs:{href:"#downloading-installation-media"}},[e._v("Downloading installation media")])]),n("li",[n("a",{attrs:{href:"#installing-in-the-graphical-user-interface"}},[e._v("Installing in the Graphical User Interface")])])])]),n("li",[n("a",{attrs:{href:"#converting-existing-servers"}},[e._v("Converting existing servers")]),n("ul",[n("li",[n("a",{attrs:{href:"#downloading-and-running-conversion-script"}},[e._v("Downloading and running conversion script")])])])]),n("li",[n("a",{attrs:{href:"#uninstalling"}},[e._v("Uninstalling")])])])]),n("p"),e._v(" "),n("h2",{attrs:{id:"hardware-compatibility"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#hardware-compatibility","aria-hidden":"true"}},[e._v("#")]),e._v(" Hardware compatibility")]),e._v(" "),n("p",[e._v("CloudLinux OS Solo supports all the hardware supported by RHEL/CentOS, with few exceptions.\nExceptions are usually hardware that require binary drivers, and that doesn't have any open source alternatives.")]),e._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),n("p",[e._v("CloudLinux OS Solo does not support ARM-based CPUs (e.g. Graviton)")])]),n("p",[e._v("With RHEL 8 ("),n("strong",[e._v("CloudLinux 8")]),e._v("), some devices are no longer supported.\nYou can "),n("a",{attrs:{href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/considerations_in_adopting_rhel_8/hardware-enablement_considerations-in-adopting-rhel-8#removed-hardware-support_hardware-enablement",target:"_blank",rel:"noopener noreferrer"}},[e._v("check the entire list here"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"fresh-installation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fresh-installation","aria-hidden":"true"}},[e._v("#")]),e._v(" Fresh installation")]),e._v(" "),n("h3",{attrs:{id:"downloading-installation-media"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#downloading-installation-media","aria-hidden":"true"}},[e._v("#")]),e._v(" Downloading installation media")]),e._v(" "),n("p",[e._v("You can download the latest ISO and use it to install\nCloudLinux OS Solo on your server using "),n("a",{attrs:{href:"https://repo.cloudlinux.com/cloudlinux/8.3_solo_beta-netinstall/iso/x86_64/",target:"_blank",rel:"noopener noreferrer"}},[e._v("this link"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("There are multiple ISO types available:")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("CloudLinux-*-boot.iso")]),e._v(" - this ISO is made specifically for network installation and does not contain any packages inside.")]),e._v(" "),n("li",[n("code",[e._v("CloudLinux-*-dvd1.iso")]),e._v(" - this one contains all packages from network installation repository,\nso you can set up any possible configuration without network access.")]),e._v(" "),n("li",[n("code",[e._v("CloudLinux-*-minimal.iso")]),e._v(" - this one contains only minimal set of packages to set up light server without GUI and Development tools.")])]),e._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),n("p",[e._v("Once you install server from the ISO, make sure you "),n("RouterLink",{attrs:{to:"/cloudlinux_installation/#license-activation"}},[e._v("register your system")]),e._v("\nand then run the "),n("code",[e._v("yum update")]),e._v(" command to get all recent updates.")],1)]),n("h3",{attrs:{id:"installing-in-the-graphical-user-interface"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installing-in-the-graphical-user-interface","aria-hidden":"true"}},[e._v("#")]),e._v(" Installing in the Graphical User Interface")]),e._v(" "),n("p",[e._v("The graphical installation interface is the preferred method of manually installing CloudLinux OS Solo.\nIt allows you to have full control over all available settings, including disk partitioning and storage configuration.")]),e._v(" "),n("p",[e._v("The graphical mode is used by default when you boot the system from the local media.")]),e._v(" "),n("h4",{attrs:{id:"language-selection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#language-selection","aria-hidden":"true"}},[e._v("#")]),e._v(" Language selection")]),e._v(" "),n("p",[e._v("The first screen displayed is the language selection page.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(352),alt:"Welcome page screenshot"}})]),e._v(" "),n("p",[e._v("First, find your preferred language in the left column and than select locale in the right one.\nSelected language will be used during installation and also as a default language of the installed system.")]),e._v(" "),n("p",[e._v("After you select your language and locale, click "),n("code",[e._v("Continue")]),e._v(" to confirm your selection\nand proceed to the "),n("a",{attrs:{href:"#installation-summary"}},[e._v("Installation Summary")]),e._v(".")]),e._v(" "),n("h4",{attrs:{id:"installation-summary"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installation-summary","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation summary")]),e._v(" "),n("p",[e._v("The Installation summary screen is the main dashboard of your installation parameters.\nMost of the options which can be configured during the installation can be accessed from here.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(353),alt:"Welcome page screenshot"}})]),e._v(" "),n("p",[e._v("The summary screen displays links to other configuration screens, those links can be in\nseveral different states, which are graphically indicated:")]),e._v(" "),n("ul",[n("li",[n("p",[e._v("Grayed out link means that the installer is currently updating this sections.\nPlease wait a little before accessing this section.")])]),e._v(" "),n("li",[n("p",[e._v("A warning symbol next to an icon means that a screen requires your attention before you start the installation.")])]),e._v(" "),n("li",[n("p",[e._v("Links without warning symbol mean that screen does not require your attention.\nYou can still change your settings in these screens, but it is not required to start installation.")])])]),e._v(" "),n("h4",{attrs:{id:"installation-source"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#installation-source","aria-hidden":"true"}},[e._v("#")]),e._v(" Installation source")]),e._v(" "),n("p",[e._v("The first thing that you should define is where the system will be installed from.\nThere are basically two options:")]),e._v(" "),n("ul",[n("li",[e._v("ISO file")]),e._v(" "),n("li",[e._v("On the network")])]),e._v(" "),n("h4",{attrs:{id:"on-the-network-source"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#on-the-network-source","aria-hidden":"true"}},[e._v("#")]),e._v(" On the network source")]),e._v(" "),n("p",[e._v("Use this option to download packages to be installed from a network location.\nThis is the preferred way as you automatically receive all critical bug fixes that may affect installation.")]),e._v(" "),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),n("p",[e._v("Most likely your network is not configured by default,\nso you can see the URL configuration field greyed out, like on the screenshot below. Please refer to the Network Configuration screen first to set up a network connection.")])]),n("p",[n("img",{attrs:{src:a(354),alt:"Unavailable network source"}})]),e._v(" "),n("p",[e._v("The correct installation URL for CloudLinux OS Solo is")]),e._v(" "),n("div",{staticClass:"language-text extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("https://repo.cloudlinux.com/cloudlinux/8.3_solo_beta-netinstall/BaseOS/x86_64/kickstart/\n")])])]),n("p",[e._v("Type in installation URL in the corresponding field, configure proxy if needed and press the "),n("code",[e._v("Done")]),e._v(" button.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(355),alt:""}})]),e._v(" "),n("h4",{attrs:{id:"iso-file-source"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#iso-file-source","aria-hidden":"true"}},[e._v("#")]),e._v(" ISO file source")]),e._v(" "),n("p",[e._v("This option is primary used as an alternative when you don't have internet connection on a target server.\nIt is only available if you downloaded Minimal or DVD ISO which contains some bundled packages in.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(356),alt:""}})]),e._v(" "),n("p",[e._v("Tick the "),n("code",[e._v("ISO file")]),e._v(" checkbox and press the "),n("code",[e._v("Done")]),e._v(" button.")]),e._v(" "),n("h4",{attrs:{id:"next-steps"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#next-steps","aria-hidden":"true"}},[e._v("#")]),e._v(" Next steps")]),e._v(" "),n("p",[e._v("After clicking "),n("code",[e._v("Done")]),e._v(", you will be redirected to the "),n("RouterLink",{attrs:{to:"/installation/#installation-summary"}},[e._v("Installation Summary")]),e._v(" screen\nwhere "),n("RouterLink",{attrs:{to:"/installation/#installation-source"}},[e._v("Installation source")]),e._v(" and "),n("RouterLink",{attrs:{to:"/installation/#software-selection"}},[e._v("Software Selection")]),e._v(" links\nwill be greyed and the "),n("code",[e._v("Downloading package metadata")]),e._v(" message wll be shown.")],1),e._v(" "),n("p",[n("img",{attrs:{src:a(357),alt:""}})]),e._v(" "),n("p",[e._v("Please hold on while that message disappears and proceed to the "),n("RouterLink",{attrs:{to:"/installation/#software-selection"}},[e._v("Software Selection")]),e._v(" section.")],1),e._v(" "),n("p",[n("img",{attrs:{src:a(358),alt:""}})]),e._v(" "),n("h4",{attrs:{id:"software-selection"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#software-selection","aria-hidden":"true"}},[e._v("#")]),e._v(" Software Selection")]),e._v(" "),n("p",[e._v("The Software Selection screen allows you to choose a Base Environment and Add-ons.\nThese options control which software packages will be installed on your system during the installation process.")]),e._v(" "),n("p",[e._v("This screen is only available if Installation Source is properly configured and only after the installer\nhas downloaded package metadata from the source.")]),e._v(" "),n("p",[e._v("It is not possible to select specific packages during a manual installation, you can only select pre-defined environments and add-ons.")]),e._v(" "),n("p",[e._v("To install CloudLinux OS Solo, first, choose the "),n("code",[e._v("CloudLinux OS Solo (minimal)")]),e._v(" environment on the left of the screen.")]),e._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("Warning")]),n("p",[e._v("All other environments are used to install "),n("a",{attrs:{href:"http://docs.cloudlinux.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CloudLinux OS Shared"),n("OutboundLink")],1),e._v(", so make sure you choose "),n("code",[e._v("CloudLinux OS Solo (minimal)")]),e._v(".")])]),n("p",[e._v("Only one environment can be chosen, even if more are available.")]),e._v(" "),n("p",[e._v("Then, on the right side of the screen, select one or more add-ons which you want to install by ticking the check boxes next to each add-on.")]),e._v(" "),n("h4",{attrs:{id:"final-preparations"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#final-preparations","aria-hidden":"true"}},[e._v("#")]),e._v(" Final preparations")]),e._v(" "),n("p",[e._v("Installation is almost done, all you need to do is to "),n("a",{attrs:{href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/installation_guide/sect-disk-partitioning-setup-x86",target:"_blank",rel:"noopener noreferrer"}},[e._v("configure your installation target"),n("OutboundLink")],1),e._v("\nusing the "),n("code",[e._v("Installation Destination")]),e._v(" menu and create your "),n("a",{attrs:{href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/7/html/installation_guide/sect-configuration-progress-menu-x86#sect-account-configuration-x86",target:"_blank",rel:"noopener noreferrer"}},[e._v("Root Password"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("Doing that, the "),n("code",[e._v("Begin installation")]),e._v(" button becomes blue, so click it.")]),e._v(" "),n("p",[n("img",{attrs:{src:a(359),alt:""}})]),e._v(" "),n("p",[e._v("After this point, the installation process actually starts and changes are being made to your selected disks.\nIt is not possible to go back to the Installation Summary and change any settings configured there;\nif you need to do so, you must wait for the installation process to finish, reboot your system, log in and change your settings\non the installed system.")]),e._v(" "),n("p",[e._v("The bottom of the screen shows a progress bar and a message informing you of the current progress of the installation.\nWhen the installation finishes, you can press the Finish installation button\nto reboot your computer and log in to your newly installed system.")]),e._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("Warning")]),n("p",[e._v("Before you finish the installation and reboot, either remove the media\nwhich you used to start the installation, or make sure that your system tries to boot\nfrom the hard drive before trying removable media. Otherwise, your computer will start the installer again instead of the installed system.")])]),n("p",[n("img",{attrs:{src:a(360),alt:""}})]),e._v(" "),n("h4",{attrs:{id:"next-steps-2"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#next-steps-2","aria-hidden":"true"}},[e._v("#")]),e._v(" Next steps")]),e._v(" "),n("p",[e._v("Reboot your system, login and check EULA which is located in the "),n("code",[e._v("/usr/share/cloudlinux-release/EULA")]),e._v(".")]),e._v(" "),n("p",[e._v("Next, "),n("RouterLink",{attrs:{to:"/manager/#activation"}},[e._v("activate your installation")]),e._v(" in order to get updates.")],1),e._v(" "),n("h2",{attrs:{id:"converting-existing-servers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#converting-existing-servers","aria-hidden":"true"}},[e._v("#")]),e._v(" Converting existing servers")]),e._v(" "),n("p",[e._v("Sometimes it is required to convert already existing servers with "),n("code",[e._v("CentOS")]),e._v(" or "),n("code",[e._v("AlmaLinux")]),e._v(" and make them "),n("code",[e._v("CloudLinux OS Solo")]),e._v(".")]),e._v(" "),n("p",[e._v("It is easy to convert your existing installation by cldeploy script. The process takes a few minutes and replaces just a handful of RPMs.")]),e._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),n("p",[e._v("Unlike "),n("RouterLink",{attrs:{to:"/installation/#fresh-installation"}},[e._v("Fresh installation")]),e._v(", converting requires CloudLinux OS Solo license.\nPlease refer to the "),n("RouterLink",{attrs:{to:"/activation/"}},[e._v("guide")]),e._v(" to get activation key.")],1)]),n("h3",{attrs:{id:"downloading-and-running-conversion-script"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#downloading-and-running-conversion-script","aria-hidden":"true"}},[e._v("#")]),e._v(" Downloading and running conversion script")]),e._v(" "),n("p",[e._v("If you already have an activation key, run the following commands:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("yum install wget -y\nwget https://repo.cloudlinux.com/cloudlinux/sources/cln/cldeploy\nbash cldeploy -k ACTIVATION_KEY\n")])])]),n("p",[e._v("Where "),n("code",[e._v("ACTIVATION_KEY")]),e._v(" is the one that you got on previous step.")]),e._v(" "),n("p",[e._v("After successful conversion, reboot your system by running the following command:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("reboot\n")])])]),n("p",[e._v("The script automatically detects and supports the following control panels:")]),e._v(" "),n("ul",[n("li",[e._v("cPanel with Easy Apache 4")])]),e._v(" "),n("p",[e._v("Unfortunately, for now it is not possible to convert servers with:")]),e._v(" "),n("ul",[n("li",[e._v("Plesk")]),e._v(" "),n("li",[e._v("DirectAdmin")]),e._v(" "),n("li",[e._v("Other control panels that use "),n("a",{attrs:{href:"https://docs.cloudlinux.com/control_panel_integration/#introduction",target:"_blank",rel:"noopener noreferrer"}},[e._v("CloudLinux OS Shared integration"),n("OutboundLink")],1),e._v(".")])]),e._v(" "),n("p",[e._v("Please subscribe to "),n("a",{attrs:{href:"https://blog.cloudlinux.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("our blog"),n("OutboundLink")],1),e._v(", check news and receive updates.")]),e._v(" "),n("h4",{attrs:{id:"the-cldeploy-explanation"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#the-cldeploy-explanation","aria-hidden":"true"}},[e._v("#")]),e._v(" The cldeploy explanation")]),e._v(" "),n("p",[e._v("By its design, CloudLinux OS Solo is very close to the upstream operating system, RHEL (and so, CentOS and AlmaLinux).\nThis makes the conversion process relatively straightforward, requiring just one reboot.")]),e._v(" "),n("p",[e._v("Here's what the cldeploy script does when you run it:")]),e._v(" "),n("ul",[n("li",[e._v("Backups the original repository settings into the"),n("code",[e._v("/etc/cl-convert-saved")]),e._v(".")]),e._v(" "),n("li",[e._v("Backups RHEL system ID into the "),n("code",[e._v("/etc/cl-convert-saved")]),e._v(" (RHEL systems only).")]),e._v(" "),n("li",[e._v("Installs CloudLinux repository settings and imports CloudLinux RPM key.")]),e._v(" "),n("li",[e._v("Replaces redhat/centos-release, redhat-release-notes, redhat-logos with CloudLinux version.")]),e._v(" "),n("li",[e._v("Re-installs CloudLinux version of rhnlib/rhnplugin.")]),e._v(" "),n("li",[e._v("Checks for binary kernel modules, finds replacement if needed.")]),e._v(" "),n("li",[e._v("Detects OVH servers and fixes the mkinitrd issues.")]),e._v(" "),n("li",[e._v("Detects Linode servers and fixes the grub issues.")]),e._v(" "),n("li",[e._v("Checks if LES is installed.")]),e._v(" "),n("li",[e._v("Checks that the "),n("code",[e._v("/etc/fstab")]),e._v(" has correct "),n("code",[e._v("/dev/root")]),e._v(".")]),e._v(" "),n("li",[e._v("Checks for efi.")]),e._v(" "),n("li",[e._v("Installs CloudLinux Manager for cPanel Solo.")])]),e._v(" "),n("h4",{attrs:{id:"next-steps-3"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#next-steps-3","aria-hidden":"true"}},[e._v("#")]),e._v(" Next steps")]),e._v(" "),n("p",[e._v("Reboot your system, login and check EULA which is located in the "),n("code",[e._v("/usr/share/cloudlinux-release/EULA")]),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"uninstalling"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#uninstalling","aria-hidden":"true"}},[e._v("#")]),e._v(" Uninstalling")]),e._v(" "),n("p",[e._v("You can always uninstall CloudLinux OS Solo. In this case, the system will be converted back to CentOS or\nAlmaLinux.")]),e._v(" "),n("p",[e._v("The following actions will be taken:")]),e._v(" "),n("ul",[n("li",[e._v("CloudLinux repositories & yum plugin will be removed.")]),e._v(" "),n("li",[e._v("CentOS or AlmaLinux repositories will be set up.")])]),e._v(" "),n("p",[e._v("In the end, the script will provide instructions on how to finish the conversion back.\nThat will require removal of the CloudLinux kernel (a manual step), and installing CentOS or AlmaLinux kernel (if needed).")]),e._v(" "),n("div",{staticClass:"warning custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("Warning")]),n("p",[e._v("Do not forget to free up a CloudLinux OS Solo license by removing the server from the "),n("a",{attrs:{href:"https://docs.cln.cloudlinux.com/dashboard/#servers",target:"_blank",rel:"noopener noreferrer"}},[e._v("Servers section of your CLN account"),n("OutboundLink")],1),e._v("\nAfter that, if you don't intend to use the license anymore, you can "),n("a",{attrs:{href:"https://docs.cln.cloudlinux.com/dashboard/#cloudlinux-os-activation-keys",target:"_blank",rel:"noopener noreferrer"}},[e._v("remove it"),n("OutboundLink")],1),e._v(" to avoid being billed.")])]),n("p",[e._v("To uninstall CloudLinux OS, run the following command:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("wget -O cldeploy https://repo.cloudlinux.com/cloudlinux/sources/cln/cldeploy\nsh cldeploy -c\n")])])]),n("p",[e._v("Now you have converted back and it is the time to install kernel.")]),e._v(" "),n("p",[e._v("To delete CloudLinux kernel, run the following command (change the kernel package name to the one you've been using):")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("rpm -e --nodeps kernel-2.6.32-673.26.1.lve1.4.27.el6.x86_64\n")])])]),n("p",[e._v("To install new CentOS or AlmaLinux kernel once you deleted CloudLinux kernel, run the following command:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("yum install kernel\n")])])]),n("p",[e._v("If yum says that the latest kernel is already installed, it is OK.\nPlease check your bootloader configuration before rebooting the system.")]),e._v(" "),n("p",[e._v("To remove unused kmods and lve libs, run the following command:")]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("yum remove lve kmod*lve*\n")])])]),n("p",[e._v("Before the reboot, the following command should be executed for restoring Apache and httpd.conf without mod_hostinglimits:")]),e._v(" "),n("p",[n("em",[e._v("For EasyApache 3:")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("/scripts/easyapache --build\n")])])]),n("p",[n("em",[e._v("For EasyApache 4:")])]),e._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("/usr/local/bin/ea_install_profile --install /etc/cpanel/ea4/profiles/cpanel/default.json\n")])])]),n("div",{staticClass:"tip custom-block"},[n("p",{staticClass:"custom-block-title"},[e._v("Note")]),n("p",[e._v("Some packages from CloudLinux repo will still remain. They are the same as CentOS or AlmaLinux packages, and don't have to be removed.\nThey will be updated in the future from CentOS repositories, as new versions come out.")])])])},[],!1,null,null,null);t.default=s.exports}}]);