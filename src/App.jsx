import React, { useState } from 'react';
import { Heart, Image as ImageIcon, Mail, Calendar, ArrowLeft, ChevronLeft } from 'lucide-react';

// Images (Ensure paths are correct: src/image/...)
import firstImage from './image/first.jpg';
import secondImage from './image/second.jpg';
import thirdImage from './image/third.jpeg';
import fourthImage from './image/fourth.jpeg';
import fifthImage from './image/fifth.jpeg';
import sixthImage from './image/sixth.jpeg';
import seventhImage from './image/seventh.jpeg';
import eighthImage from './image/eighth.jpeg';
import ninthImage from './image/ninth.jpeg';
import tenthImage from './image/tenth.jpeg';

const App = () => {
  const [view, setView] = useState('home');
  const [selectedMemory, setSelectedMemory] = useState(null);

  const options = [
    { id: 'memories', title: 'Our Memories', icon: <ImageIcon size={28} /> },
    { id: 'letter', title: 'My Letter', icon: <Mail size={28} /> },
    { id: 'reasons', title: 'Why I Love You', icon: <Heart size={28} /> },
    { id: 'date', title: 'Date Afternoon?', icon: <Calendar size={28} /> },
  ];

  const memoryCards = [
    { id: 1, img: firstImage, note: 'The first Birthday and first pic 💖.' },
    { id: 2, img: secondImage, note: 'A sweet memory worth replaying.' },
    { id: 3, img: thirdImage, note: 'Ethnic day with my cutie pie 😘' },
    { id: 4, img: fourthImage, note: 'A moment I was lost in you.' },
    { id: 5, img: fifthImage, note: 'Our First kiss day 💖😘' },
    { id: 6, img: sixthImage, note: 'Every day feels lighter with you.' },
    { id: 7, img: seventhImage, note: 'Just us, being our favorite' },
    { id: 8, img: eighthImage, note: 'Another tiny piece of our story.' },
    { id: 9, img: ninthImage, note: 'You being cute without even trying. 🫂💖' },
    { id: 10, img: tenthImage, note: 'Ten memories, one feeling.' },
  ];

  const handleBack = () => {
    if (selectedMemory) setSelectedMemory(null);
    else setView('home');
  };

  // WhatsApp Redirect Function
  const handleDateConfirmation = () => {
    const phoneNumber = "7975389968"; 
    const message = "Yes! I'm ready for our date afternoon! 💖";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-2 sm:p-4 font-sans overflow-hidden">
      {/* Phone Container */}
      <div className="w-full max-w-sm bg-white rounded-[2.5rem] shadow-2xl border-8 border-pink-100 relative h-[90vh] max-h-[750px] flex flex-col overflow-hidden">
        
        {/* Fixed Header */}
        <div className="shrink-0 flex items-center justify-between px-6 pt-6 pb-2 z-30 bg-white/80 backdrop-blur-sm">
          <div className="flex items-center gap-1">
            {view !== 'home' && (
              <button onClick={handleBack} className="p-1 text-pink-400 hover:bg-pink-50 rounded-full transition-colors">
                <ChevronLeft size={20} />
              </button>
            )}
            <div className="flex gap-1 opacity-40 ml-1">
              <Heart fill="#f472b6" size={12} className="text-pink-400" />
              <Heart fill="#f472b6" size={16} className="text-pink-400" />
            </div>
          </div>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Date Special (Surprise..😘🫂)</p>
          <div className="w-8" /> 
        </div>

        {/* Main Content Area */}
        <div className="flex-1 flex flex-col px-6 overflow-hidden relative">
          
          {/* HOME VIEW */}
          {view === 'home' && (
            <div className="h-full flex flex-col justify-center animate-in fade-in duration-500">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-pink-500 mb-2" style={{ fontFamily: 'cursive' }}>
                  Choose an envelope
                </h1>
                <p className="text-gray-400 text-sm">Tap to explore our story</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => setView(option.id)}
                    className="bg-pink-50/50 border-2 border-pink-100 rounded-2xl py-6 px-2 flex flex-col items-center justify-center gap-3 transition-all active:scale-95 hover:bg-pink-100"
                  >
                    <div className="text-pink-500">{option.icon}</div>
                    <span className="text-pink-900 font-bold text-[11px] uppercase tracking-wider">{option.title}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* MEMORIES VIEW */}
          {view === 'memories' && (
            <div className="h-full flex flex-col min-h-0 animate-in fade-in duration-500">
              <div className="text-center mb-4 shrink-0">
                <h2 className="text-2xl font-bold text-pink-500" style={{ fontFamily: 'cursive' }}>Our Best Moments</h2>
                <p className="text-[11px] text-gray-500 italic mt-1 leading-tight">Click an image to see the note</p>
              </div>

              <div className="flex-1 overflow-y-auto pr-1 no-scrollbar pb-4">
                <div className="grid grid-cols-2 gap-3">
                  {memoryCards.map((memo) => (
                    <button 
                      key={memo.id}
                      onClick={() => setSelectedMemory(memo)}
                      className="aspect-square bg-gray-100 rounded-2xl overflow-hidden shadow-sm active:scale-95 transition-transform border-2 border-transparent hover:border-pink-200"
                    >
                      <img src={memo.img} alt="memory" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </div>

              {selectedMemory && (
                <div className="absolute inset-0 bg-white/98 z-40 p-6 flex flex-col items-center justify-center animate-in zoom-in duration-300">
                  <div className="w-full max-w-[260px] aspect-square rounded-3xl shadow-2xl overflow-hidden bg-gray-100 border-4 border-white mb-6">
                    <img src={selectedMemory.img} className="w-full h-full object-cover" alt="Selected" />
                  </div>
                  <div className="px-4 text-center">
                    <Heart size={24} fill="#f472b6" className="text-pink-400 mx-auto mb-4 opacity-40" />
                    <p className="text-pink-600 font-medium italic text-lg leading-relaxed">"{selectedMemory.note}"</p>
                  </div>
                  <button onClick={() => setSelectedMemory(null)} className="mt-10 px-8 py-2.5 bg-pink-500 text-white rounded-full text-sm font-bold shadow-lg">
                    Back to Gallery
                  </button>
                </div>
              )}
            </div>
          )}

          {/* LETTER VIEW */}
          {view === 'letter' && (
            <div className="h-full flex flex-col animate-in fade-in duration-500 overflow-hidden">
               <div className="flex-1 overflow-y-auto no-scrollbar bg-white/40 p-2 rounded-2xl">
                  <div className="bg-pink-50/80 p-6 rounded-3xl border border-pink-100 shadow-sm min-h-full">
                    <h2 className="text-2xl font-bold text-pink-600 mb-6" style={{ fontFamily: 'cursive' }}>Dearest Heer,</h2>
                    <div className="text-gray-700 text-[15px] leading-relaxed space-y-6">
                      <p>
                        Main ye letter isliye likh raha hu kyunki main dil se <strong>Sorry</strong> kehna chahta hu....
                        Mujhe pata hai kabhi kabhi tumhe lagta hoga ki me tumhare liye enough nahi hu jaisa chahte ho wesa nahi hu...
                        pr me hamesha hamesha try krta rehta hu ki tumhe duniya ki hr khushi de saku... ❤️
                      </p>
                      <p>
                        I know.. kl ki wajah se tum mujhse gussa hoge... lekin Heer, wo sab mera ek <strong>plan</strong> tha! 🕵️‍♂️ 
                        Bhala hamari first scooty ride me bina kisi surprise ke aise hi feeki kaise jaane deta.. aapne kaha tha na aapko surprises chahiye first night me toh is ride me kyu nahi..? 🛵✨
                      </p>
                      <p>
                        Ye website mene actually tumhare birthday ke liye plan kiya tha..par tab me ise complete nahi kar paaya tha... 
                        I’m really sorry for that. Pr me hamesha mehnat karunga tumhare liye wo sab karne ki aur banne ki jo tum chahte ho...💍
                      </p>
                      <div className="bg-white/60 p-4 rounded-2xl border border-pink-200">
                        <p className="font-bold text-pink-500 mb-3 underline decoration-pink-200">Aaj ka hamara Plan: ✨</p>
                        <ul className="space-y-3 text-[14px]">
                          <li className="flex items-start gap-2">🥭 <span>Main tumhare liye <strong>Kerri</strong> banake laya hu..!</span></li>
                          <li className="flex items-start gap-2">🕐 <span>Hum 1:00 PM ko milenge...</span></li>
                          <li className="flex items-start gap-2">🛵 <span>Chandapura side ya Igluru chalenge...</span></li>
                          <li className="flex items-start gap-2">🍦 <span>Kuch thanda khaayenge..!</span></li>
                        </ul>
                      </div>
                      <p className="italic text-gray-600 pt-2 font-medium">
                        Bs ab jaldi se maan jao date afternoon envelop me jaake yes tap karo aur gussa thook do. Me tumhe ghumane le jaane ke liye bahot excited hu..! 🫂🫂🫂
                      </p>
                      <p className="text-pink-600 font-bold text-right pt-4">— Always yours, Gullu</p>
                    </div>
                  </div>
               </div>
            </div>
          )}

          {/* REASONS VIEW */}
          {view === 'reasons' && (
            <div className="h-full flex flex-col min-h-0 animate-in fade-in duration-500">
              <div className="text-center mb-6 shrink-0">
                <h2 className="text-2xl font-bold text-pink-500" style={{ fontFamily: 'cursive' }}>Why I Love You... ❤️</h2>
                <p className="text-[11px] text-gray-400 italic mt-1 leading-tight">Ye kuch choti choti baatein hain jo mujeh bahot pasand hain</p>
              </div>
              <div className="flex-1 overflow-y-auto no-scrollbar pr-1 pb-4">
                <div className="space-y-4">
                  {[
                    { title: "Tumhari Smile 😊", desc: "Jab tum haste ho na, mera pura din apne aap accha ho jata h... bas wahi smile hamesha rakhna." },
                    { title: "Your Soft Heart 💖", desc: "Hr kisi ki care krna aur itna kindness rakhna—ye tumhari sabse best quality h jo mujhe pasand h." },
                    { title: "The Way You Support Me 🫂", desc: "Jab me thoda low feel krta hu, tum hamesha mere saath khade rehte ho aur mujhe handle krte ho." },
                    { title: "You Are My Everything 💎", desc: "Me tumhare liye pura dunya lagu ya na lagu, pr mere liye tum meri puri duniya ho aur hamesha rahoge." },
                    { title: "How You Listen 👂", desc: "Me kuch bhi faltu bolu, tum hamesha dhyan se sunte ho... chahe me kitna bhi paka raha hu! 😘" },
                  ].map((reason, index) => (
                    <div key={index} className="p-4 bg-white/60 border-l-4 border-pink-400 rounded-r-2xl shadow-sm animate-in slide-in-from-right duration-500" style={{ animationDelay: `${index * 150}ms` }}>
                      <h3 className="text-pink-600 font-bold text-sm mb-1">{index + 1}. {reason.title}</h3>
                      <p className="text-gray-600 text-xs leading-relaxed italic">"{reason.desc}"</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center pb-6">
                  <Heart size={20} className="text-pink-400 mx-auto animate-pulse fill-current opacity-50" />
                  <p className="text-pink-500 font-bold text-sm mt-2 italic">...aur aise hazaaron reasons aur h..!💖💖</p>
                </div>
              </div>
            </div>
          )}

          {/* DATE AFTERNOON VIEW */}
          {view === 'date' && (
            <div className="h-full flex flex-col items-center justify-center text-center animate-in fade-in duration-500">
              <Calendar size={60} className="text-pink-500 mb-4 opacity-80" />
              <h2 className="text-2xl font-bold text-pink-600" style={{ fontFamily: 'cursive' }}>Date Afternoon?</h2>
              <p className="text-gray-500 mt-2 italic">Say yes and let's go!</p>
              <div className="mt-8 p-6 bg-pink-100/50 rounded-3xl border-2 border-dashed border-pink-300">
                <p className="text-pink-700 font-bold">1:00 PM - 🛵 Chandapura / Igluru</p>
                {/* Clicking this opens WhatsApp with your pre-defined message */}
                <button 
                  onClick={handleDateConfirmation}
                  className="mt-4 px-8 py-2 bg-pink-500 text-white rounded-full font-bold shadow-lg active:scale-95 transition-all"
                >
                  Yes! ❤️
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Fixed Footer */}
        <div className="shrink-0 p-6 flex justify-center items-center z-30 bg-white/80 backdrop-blur-sm">
          {view !== 'home' && !selectedMemory && (
            <button 
              onClick={() => setView('home')}
              className="flex items-center gap-2 px-10 py-3 bg-white border-2 border-pink-200 text-pink-500 rounded-full font-bold text-sm shadow-md active:scale-95 transition-all hover:bg-pink-50"
            >
              <ArrowLeft size={18} /> Menu
            </button>
          )}
        </div>

        {/* Decorations */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden opacity-10">
          <div className="absolute top-20 right-10 animate-bounce"><Heart fill="pink" /></div>
          <div className="absolute bottom-40 left-10 animate-pulse"><Heart fill="pink" /></div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
};

export default App;