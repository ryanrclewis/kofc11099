import SectionHeader from '@/components/SectionHeader';

export const metadata = {
  title: 'Event Calendar | Knights of Columbus Council #11099',
  description: 'View the monthly event schedule, meetings, volunteer shifts, and activities for St. Gerard Council #11099.',
};

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen bg-light">
      <SectionHeader
        title="Event Calendar"
        subtitle="Stay up to date with council meetings, community activities, and parish initiatives."
        breadcrumbs={[
          { name: 'News & Media', href: '/newsletter' },
          { name: 'Event Calendar', href: '/calander' },
        ]}
      />

      <div className="max-w-6xl mx-auto px-4 py-16 w-full flex-grow flex flex-col justify-center">
        <div className="card-premium p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-xs">
          <div className="w-full overflow-x-auto rounded-xl">
            {/* Google Calendar Iframe Styled Responsively */}
            <iframe
              src="https://calendar.google.com/calendar/b/1/embed?height=800&wkst=1&bgcolor=%23ffffff&ctz=America%2FDetroit&src=ZWN1bGxpbW9yZWtvZmMxMTA5OUBnbWFpbC5jb20&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=a29mYzExMDk5Z2tAZ21haWwuY29t&src=ZW4uY2hyaXN0aWFuI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&color=%237986CB&color=%23F09300&color=%230B8043&color=%234285F4&color=%23D81B60&title=Knights%20of%20Columbus%20%2311099%20Event%20Calendar&showTz=0"
              style={{ borderWidth: 0, width: '100%', minWidth: '800px' }}
              height="650"
              frameBorder="0"
              scrolling="no"
              title="Knights of Columbus Event Calendar"
            />
          </div>
          <p className="text-center text-xxs text-slate-400 font-medium mt-4">
            Note: Scroll horizontally to view the full calendar on smaller screens. Calendar is set to Eastern Time (America/Detroit).
          </p>
        </div>
      </div>
    </div>
  );
}
