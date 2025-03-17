'use client'

import React, { useEffect } from 'react'
import Image from 'next/image';
import { Arvo } from "next/font/google";

import AOS from 'aos';
import 'aos/dist/aos.css'; 


// these links are all pictures from cloudinary
const phPic = [
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1739981725/swiper2_m6gyxs.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740012868/DSC_4373_yzaqrw.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740012890/DSC_4381_xpulqy.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740012910/DSC_4388_r5fyzw.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740012995/DSC_4422_bw0sju.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013069/DSC_4449_eajc9l.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013094/DSC_4455_vusvy2.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013168/DSC_4467_jilr9k.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013193/DSC_4497_jghbjp.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013243/DSC_4531_hzrvia.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013272/DSC_4620_dqysnl.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013294/DSC_4622_pa0byf.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013314/DSC_4623_u0fthp.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013331/DSC_4624_snw9ak.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013393/DSC_4639_r8fsac.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013454/DSC_4651_lcixhp.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013496/DSC_4678_koy2m8.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013534/DSC_4899_hkcfnq.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013577/DSC_4964_vutggs.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013604/DSC_4985_pliep4.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013647/DSC_5017_hrugdm.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013718/DSC_5088_vgunqm.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013683/DSC_5065_fqbcm5.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013745/DSC_5115_cyxhlp.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013788/DSC_5143_jtxeb2.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013818/DSC_5156_lkz13t.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013839/DSC_5162_iuqmjh.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013860/DSC_5163_crazz5.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013914/DSC_5180_wtignw.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013887/DSC_5165_wostbp.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013972/DSC_5190_lsn6rf.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740013997/DSC_5192_h4v6bh.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014040/DSC_5211_pev2aj.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014067/DSC_5214_qw0atn.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014090/DSC_5232_r9g1vd.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014226/DSC_5308_uugr3c.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014115/DSC_5252_rlsrlk.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014270/DSC_5393_buomqx.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014248/DSC_5313_slumtf.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014357/DSC_5416_iyvba2.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014299/DSC_5395_nyy2yq.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014395/DSC_5418_pimga7.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014475/DSC_5428_szwu8n.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014538/DSC_5488_yhgyrv.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740014688/DSC_5503_agly8n.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740823302/ap1_ejsu4y.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740824191/ap2_mjuzip.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740824708/ap3_ahamxs.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740826125/2ap1_lkpbsv.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740827057/2ap2_boeeom.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740827309/2ap3_y0ftrl.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740830037/3ap3_huobwp.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740830187/4ap1_igbuai.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740830692/4ap2_cxmuzd.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740602752/DSC_5481_zen0c1.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599260/IMG-20250226-WA0199_altyic.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599248/IMG-20250226-WA0197_o9oz9f.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599189/IMG-20250226-WA0196_mhhblr.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599182/IMG-20250226-WA0195_inzdiw.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599172/IMG-20250226-WA0193_aae8ow.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599160/IMG-20250226-WA0192_z0o0la.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599150/IMG-20250226-WA0191_uejhnr.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599144/IMG-20250226-WA0190_kl0scm.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599136/IMG-20250226-WA0189_q2ns0z.jpg',

  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599130/IMG-20250226-WA0188_llnkam.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599117/IMG-20250226-WA0182_x0vohu.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599111/IMG-20250226-WA0183_abmju2.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740599057/IMG-20250127-WA0090_byqiol.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740592027/pic1_mss4ds.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1740569602/joinus_fp6y9d.jpg',
  
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1741826548/WhatsApp_Image_2025-03-12_at_12.44.00_20118f76_gylvke.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1741826564/WhatsApp_Image_2025-03-12_at_23.37.53_98cef00f_nhlqyy.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1741826581/WhatsApp_Image_2025-03-12_at_23.58.34_6bd1d9bc_ve1uxf.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1741826590/WhatsApp_Image_2025-03-12_at_23.58.34_185f2b34_ydqwcu.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1741826606/WhatsApp_Image_2025-03-12_at_23.58.35_2ed78847_ednk5h.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1741826817/WhatsApp_Image_2025-03-12_at_23.58.38_190625d3_th2fxf.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1741826808/WhatsApp_Image_2025-03-12_at_23.58.38_5294c26e_tqvckq.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1741826619/WhatsApp_Image_2025-03-12_at_23.58.35_de98a5ff_atnaya.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1741826638/WhatsApp_Image_2025-03-12_at_23.58.36_19cf8cb5_btb1qg.jpg',
  'https://res.cloudinary.com/dvkmv0k18/image/upload/v1741826780/WhatsApp_Image_2025-03-12_at_23.58.36_6d76a031_ny4qlw.jpg',
 'https://res.cloudinary.com/dvkmv0k18/image/upload/v1741826825/WhatsApp_Image_2025-03-12_at_23.58.38_cb349f63_s15ips.jpg',
 'https://res.cloudinary.com/dvkmv0k18/image/upload/v1741826833/WhatsApp_Image_2025-03-12_at_23.58.39_4ee8af0e_uccgdb.jpg',
 'https://res.cloudinary.com/dvkmv0k18/image/upload/v1742009895/1_hjpkji.jpg',
 'https://res.cloudinary.com/dvkmv0k18/image/upload/v1742009901/2_btiv9t.jpg',
 'https://res.cloudinary.com/dvkmv0k18/image/upload/v1742009906/3_cwvafo.jpg',
 'https://res.cloudinary.com/dvkmv0k18/image/upload/v1742010120/4_pk0lnb.jpg',
 'https://res.cloudinary.com/dvkmv0k18/image/upload/v1742010338/5_uy2fv9.jpg',
 'https://res.cloudinary.com/dvkmv0k18/image/upload/v1742015637/IMG-20250315-WA0012_zehz1b.jpg',
 'https://res.cloudinary.com/dvkmv0k18/image/upload/v1742015638/IMG-20250315-WA0021_n3qahn.jpg',
 'https://res.cloudinary.com/dvkmv0k18/image/upload/v1742015638/IMG-20250315-WA0024_gh0bos.jpg',
 'https://res.cloudinary.com/dvkmv0k18/image/upload/v1742015639/IMG-20250315-WA0025_xif0wz.jpg',
 'https://res.cloudinary.com/dvkmv0k18/image/upload/v1742015647/IMG-20250315-WA0030_vgxev2.jpg',
'https://res.cloudinary.com/dvkmv0k18/image/upload/v1742016198/IMG-20250315-WA0028_aaltic.jpg',
 'https://res.cloudinary.com/dvkmv0k18/image/upload/v1742015645/IMG-20250315-WA0029_e9nnnc.jpg',
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742015648/IMG-20250315-WA0031_njxlzm.jpg",
 'https://res.cloudinary.com/dvkmv0k18/image/upload/v1742015650/IMG-20250315-WA0032_cd6euv.jpg',
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742015651/IMG-20250315-WA0033_tp4lgj.jpg",
'https://res.cloudinary.com/dvkmv0k18/image/upload/v1742036214/DSC_5180_wumvc8.jpg',
 'https://res.cloudinary.com/dvkmv0k18/image/upload/v1742036225/DSC_4918_ppdvwu.jpg',
 'https://res.cloudinary.com/dvkmv0k18/image/upload/v1742036226/DSC_4937_gvvxwh.jpg',
 'https://res.cloudinary.com/dvkmv0k18/image/upload/v1742036227/DSC_4924_ssoddw.jpg',
 'https://res.cloudinary.com/dvkmv0k18/image/upload/v1742036228/DSC_4962_mtmjch.jpg',
 'https://res.cloudinary.com/dvkmv0k18/image/upload/v1742036771/WhatsApp_Image_2025-03-15_at_11.10.27_2e1170d5_swovmt.jpg',
 'https://res.cloudinary.com/dvkmv0k18/image/upload/v1742036771/WhatsApp_Image_2025-03-15_at_11.10.29_bbc622d1_qew3pk.jpg',
 'https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052332/39409186_1934642856558703_8571732271491448832_n_eihj5s.jpg',
 'https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052332/40139835_1949303671759288_7172326515072303104_n_oz88ie.jpg',
 'https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052333/68840047_10214575202149429_1279548066889728_n_oh8qex.jpg',
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052333/68460640_10214551136027791_4583067667786629120_n_fmtkcy.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052333/68410650_10214551135667782_6252830972560015360_n_v2lx8u.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052333/67949338_10214551135107768_8449017861774508032_n_hlffjl.jpg",
 'https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052333/69220279_10214575202069427_5959902572201377792_n_guz2ok.jpg',
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052333/69220279_10214575202069427_5959902572201377792_n_guz2ok.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052333/187178164_10218936925349783_7872357227153982147_n_bp9gvo.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052334/210279555_10219170438347462_5664812254625108991_n_mb6plk.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052334/69004251_10214575202629441_3452412360268972032_n_c9jzck.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052334/211715231_10219170437787448_98889598551156931_n_uyeztn.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052334/187707923_10218936921989699_680836326550257382_n_cdhcii.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052334/31899596_1788386917850965_9025476105817030656_n_ab1tsc.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052334/465861027_10225168588814427_533253211489107904_n_aixjav.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052334/31483967_1740191736040340_1015724323433873408_n_uwobht.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052335/32247236_1796554580367532_6440138954514628608_n_ciij7f.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052335/31902007_1788387021184288_5253410649924435968_n_eygx3f.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052335/39105877_1927612393928416_6161290453384691712_n_zhudgt.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052335/31946234_1788387147850942_8445075545653248000_n_wy3epi.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052335/35181033_10216887901419753_5324506553540149248_n_va2xzw.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052335/34308571_1818575174832139_5282089155877142528_n_ou4p50.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052335/475149149_578146758705768_4032874148864979143_n_osxqpx.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052335/35050977_10216887899659709_1123866424511561728_n_gj5iqt.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052335/433634809_10220288491562551_6996687907746176498_n_wn2rkj.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052335/33622867_1812960505393606_6681031304936423424_n_bxzfuh.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052336/475205338_577845818735862_2292840455163634075_n_eewqtp.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052336/475170035_578158165371294_8642435194251992163_n_rkwqjn.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052336/326301797_578464333700435_6119059084279628655_n_fywqrc.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052336/475181261_578163785370732_2130043478660106506_n_rac66j.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052336/433915724_10220288383719855_7588026675010052929_n_zn8igk.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052336/463877572_8319679434795959_7030834759485995587_n_rbekhg.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052337/463837202_8319679171462652_9098785356974090129_n_biegak.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052337/463877900_8319679154795987_7720006453462901760_n_jyxfma.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052337/434125374_10220288493002587_6606836680516969918_n_ulmihy.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052337/434136818_10220288491602552_8465951958461276041_n_fmaxn9.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052338/465674613_9127064327322003_6498471504186875867_n_ia9pty.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052338/465597262_9127064313988671_4331477274994387236_n_t27g0s.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052338/465669601_9127064140655355_8784935206509568696_n_ddqpvu.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052338/480860716_689569456757542_3530621688295624834_n_by2alv.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052339/466135231_10229115161077759_6858914485069330269_n_wnh9ah.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052343/474926334_577848212068956_8767553351701054605_n_rjqwpk.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052343/466381608_10229115160837753_1576770435932034551_n_hkhch0.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052343/467437138_10234528492009657_8999707905951064551_n_ytp90u.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052343/475106364_577824415404669_3664241048106547397_n_xcsjyc.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052343/479491140_10170332735170411_1527353304632866609_n_pqsylj.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052343/475300566_578149408705503_6037916122990435112_n_upfbqh.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052344/480520510_689569403424214_3219291544908496875_n_r1nuha.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052344/480682349_689576583423496_2838903672455548478_n_xcdf4s.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052344/480679849_689568320090989_239021958815166918_n_ttnews.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052345/480741906_689568396757648_989497891712354666_n_zvbmqg.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052344/480574133_690655729982248_4930923132089827169_n_umuudi.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052345/481260731_10226551091379175_5187262976082652194_n_gpamcf.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052346/481977735_700385159009305_9191746470197961350_n_kefx2q.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052346/481974650_700383795676108_1575357055246977411_n_dnpkef.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052346/481956462_700385049009316_6291023685010867384_n_koytyx.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052347/482029043_700384332342721_2642267176793642092_n_lhofuu.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052347/482011153_700385439009277_6008344822911580232_n_pqewfk.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052348/482032170_700383879009433_1209673003605007392_n_fre20h.jpg",
 "https://res.cloudinary.com/dvkmv0k18/image/upload/v1742052347/482027441_700385102342644_8362418814063330500_n_klpcir.jpg",
 


 













  // Ended... at run 1007

]


const arvoFont= Arvo ({
  subsets: ["latin"],
  weight: '400',
  variable: "--font-arvo",
});



const Photoblast = () => {

  useEffect(() => {
      AOS.init({
        animatedClassName: 'aos-animate',
        useClassNames: false,
        duration: 400,
        easing: 'ease',
        once: false,
        anchorPlacement: 'top-bottom',
      });
    }, []);


  return (
    <div className={`${arvoFont.variable}`}>
    <div className='lg:pt-28 bg-black text-white/90 px-[1rem] md:px-[3rem] font-arvo'>
      <div className='flex items-center justify-center gap-5 py-12'>
        <h1 className='text-center text-xl md:text-4xl font-bold tracking-[5px]'>PH H<sup>3</sup> PHOTO-BLAST</h1>
        <audio src='/audio/by.mp3' typeof='mp3' controls className='bg-red-200/50 rounded'></audio>
      </div>
      
      {/* top image */}
      <div className='grid grid-cols-1 lg:flex gap-5'>
        {/* 1 */}
        <div>
          <Image src='/image/photob.png' width={400} height={400} alt='image' className='rounded transition duration-300 hover:brightness-75 hvr-float-shadow'/>
        </div>

        {/* 2 */}
        <div className='flex flex-col gap-5 ml-auto'>
          <div className='hidden lg:flex gap-5'>
            <Image src='/image/s1.jpg' width={200} height={200} alt='image' className='rounded transition duration-300 hover:brightness-75 hvr-float-shadow'/>
            <Image src='/image/s2.jpg' width={200} height={200} alt='image' className='rounded transition duration-300 hover:brightness-75 hvr-float-shadow'/>
            <Image src='/image/s3.jpg' width={200} height={200} alt='image' className='rounded transition duration-300 hover:brightness-75 hvr-float-shadow'/>
          </div>

          {/* 3 */}
          <div className='grid grid-cols-1 md:flex gap-5'>
            <Image src='/image/s5.jpg' width={200} height={200} alt='image' className='rounded transition duration-300 hover:brightness-75 hvr-float-shadow'/>
            <Image src='/image/s2.jpg' width={200} height={200} alt='image' className='rounded transition duration-300 hover:brightness-75 hvr-float-shadow'/>
            <Image src='/image/s2.jpg' width={200} height={200} alt='image' className='rounded transition duration-300 hover:brightness-75 hvr-float-shadow'/>
          </div>
        </div>
      </div>

      {/* other images from cloudinary */}
      <div className='grid grid-cols-1 md:grid md:grid-cols-3 lg:grid lg:grid-cols-4 gap-5 py-8'>
        {phPic.map((url, index)=>(
          <div key={index} data-aos="zoom-in"
           className='overflow-hidden rounded-lg '>
            <Image src={url} alt={`Image ${index + 1}`}
            width={700} height={700}
            className='w-full h-auto object-cover transition duration-300 hover:brightness-75 hvr-float-shadow'
            
            />

          </div>
        )

        )}
      </div>
      
    </div>
    </div>
  )
}

export default Photoblast;
