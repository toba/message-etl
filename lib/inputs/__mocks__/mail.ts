const mail = [
   {
      attachments: [],
      headers: {},
      headerLines: [
         { key: 'x-gm-thrid', line: 'X-GM-THRID: 1612003700206917681' },
         {
            key: 'x-gmail-labels',
            line: 'X-Gmail-Labels: Inbox,Important,Family/Jessica'
         },
         { key: 'delivered-to', line: 'Delivered-To: self@trailimage.com' },
         {
            key: 'received',
            line:
               'Received: by 2002:ac8:24dc:0:0:0:0:0 with SMTP id t28-v6csp143987qtt;\r\n        Tue, 18 Sep 2018 20:08:47 -0700 (PDT)'
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 2002:a9d:1e9:: with SMTP id e96-v6mr18819665ote.68.1537326526969;\r\n        Tue, 18 Sep 2018 20:08:46 -0700 (PDT)'
         },
         {
            key: 'arc-seal',
            line:
               'ARC-Seal: i=1; a=rsa-sha256; t=1537326526; cv=none;\r\n        d=google.com; s=arc-20160816;\r\n        b=iZcLEn7Yd9Q7C2nDbppjwqTiLPvZCunxad0NJtwJfUCbKikrLu06Lbcg+5NIoOzgey\r\n         KrloVBFZi42d5vgPlplvfzmfzSh+STBGh0HU4+JYHDkZiPXE1elDTW6KeOuQ9USbH9BT\r\n         dyKMLH8PVX0+wOFFCNChGi9p8rDMKUIclSw4UfpcJprMzSkg1RRFOgMBq17+slkWcrrx\r\n         T2PXCv0ICK3Gc1wdL8AG8TYTwzGMkhVYwuoT8jXXoac7z83ZS1CcMaU1wc6+dZWv3u0T\r\n         2EQUPj6X1NciqZCT0rH5vdhWMV55lufeAAwnQllDQ/BCX5EdPtKT2SvkbOz9i1o21weN\r\n         IBKw=='
         },
         {
            key: 'arc-message-signature',
            line:
               'ARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;\r\n        h=to:subject:message-id:date:from:in-reply-to:references:mime-version\r\n         :dkim-signature;\r\n        bh=Mc8poRXdkr3G5Kg9GC+gBZaEdPW5RUloFPEoGxNZBC8=;\r\n        b=UVHjO24MWWXbiFrTSWEZ/HGqTz4aDpk+g+tFYDt4T9FnCJMwRpdrr/wVLwS9chPD8G\r\n         BpGGecieaVPioHQR/FjJiQUrhKW/orqCQsxEC+br1/LAoy0+jziyQPZUt8dpHlV/lw6R\r\n         1yoBtGl+q1SygPZGZU8yEYevIQ366t/H1QBN7DIURUmd5tpdHnpDA0s5kfvmOX24QREK\r\n         3JPjTalbH+dLjPDuhw8k2d9vPmtMQASnj/LqEqmBVZAYfc6b6apZ/e/A4/h+1HZ9XjyE\r\n         H7r34iP2EpHQ8YZ6+pqTAxnUKIpSTFJN/C0aExJCV1Mzb3HOz7hdNYeXrv2E9F81yKtT\r\n         S6Yg=='
         },
         {
            key: 'arc-authentication-results',
            line:
               'ARC-Authentication-Results: i=1; mx.google.com;\r\n       dkim=pass header.i=@trailimage-com.20150623.gappssmtp.com header.s=20150623 header.b=DmI5QxuT;\r\n       spf=neutral (google.com: 209.85.220.41 is neither permitted nor denied by best guess record for domain of other@trailimage.com) smtp.mailfrom=other@trailimage.com'
         },
         { key: 'return-path', line: 'Return-Path: <other@trailimage.com>' },
         {
            key: 'received',
            line:
               'Received: from mail-sor-f41.google.com (mail-sor-f41.google.com. [209.85.220.41])\r\n        by mx.google.com with SMTPS id k204-v6sor17323293oib.16.2018.09.18.20.08.46\r\n        for <self@trailimage.com>\r\n        (Google Transport Security);\r\n        Tue, 18 Sep 2018 20:08:46 -0700 (PDT)'
         },
         {
            key: 'received-spf',
            line:
               'Received-SPF: neutral (google.com: 209.85.220.41 is neither permitted nor denied by best guess record for domain of other@trailimage.com) client-ip=209.85.220.41;'
         },
         {
            key: 'authentication-results',
            line:
               'Authentication-Results: mx.google.com;\r\n       dkim=pass header.i=@trailimage-com.20150623.gappssmtp.com header.s=20150623 header.b=DmI5QxuT;\r\n       spf=neutral (google.com: 209.85.220.41 is neither permitted nor denied by best guess record for domain of other@trailimage.com) smtp.mailfrom=other@trailimage.com'
         },
         {
            key: 'dkim-signature',
            line:
               'DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=trailimage-com.20150623.gappssmtp.com; s=20150623;\r\n        h=mime-version:references:in-reply-to:from:date:message-id:subject:to;\r\n        bh=Mc8poRXdkr3G5Kg9GC+gBZaEdPW5RUloFPEoGxNZBC8=;\r\n        b=DmI5QxuT7mODbuWUoltU16h6e3qwDNMbLpirtecQAUcrJxr9KT1N1vuAFkSwoUKY82\r\n         i4MIqUK2EniyZxpkCvpiHurmLzA36dc4xsCikid8ZydgDxCs2jjGtm9FQdKcrDwTFK+t\r\n         Mdq6n40yprnoD+/7j22qI9LrwuQ1vb+USaLmnFIhACrJPV9C09KTfQvc0AsdKcZ+FNCa\r\n         EB4hfB+Stc9Fp3uymNGT/gsjzUMQae+9i0ULXkjNhHFVCZykFDrI99S4FOgXQ0MZjkUm\r\n         bPsrLKsQysN/2lHe3bQ13N4S2e0jnxhqohpKQR3tiMygA5U1kGh6IhC4zYHYLmc6qkhQ\r\n         s9rw=='
         },
         {
            key: 'x-google-dkim-signature',
            line:
               'X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=1e100.net; s=20161025;\r\n        h=x-gm-message-state:mime-version:references:in-reply-to:from:date\r\n         :message-id:subject:to;\r\n        bh=Mc8poRXdkr3G5Kg9GC+gBZaEdPW5RUloFPEoGxNZBC8=;\r\n        b=DgNoZ+o9csQ/ohp3AInJa8cx82De7fGK4I7eWTgc/4ASLh1tZbSXKj9N4UOGgF44xi\r\n         JqUYToNMbkb6xGNWRMXXgGBLvqzABYFJdgW9+ml62tbt0DYxyQYkWB6hJzEOIxxdIpKv\r\n         I6a8eVRmr9EfIAoRmHIs+wdWhqUW3uQ458LB5n6TNbIpHxxN8apY/4FH+PRyHErgSXJ1\r\n         5Srt6nHD1htS7ZzRYq0//eIJYhUK1o+yHDPabMJgVefZP9f2l0uNNwLd1ppvSbsNGesf\r\n         Eh+ajAqzqQHh5p+tKqXwTfiH327kHMaVGO1xZAtCtJ3viPBO7IPZVlxiPdeNrf5x/Tv7\r\n         k3jg=='
         },
         {
            key: 'x-gm-message-state',
            line:
               'X-Gm-Message-State: APzg51B71pgt+hVZK0Mrqqc2NnzNqYb3I63g1IV0kzghPiCloF/YzYMe\r\n\tNggGfr/FdypE2SWKENspfTuX6c0m7cBwNcMW5q3xhZFDUltfzA=='
         },
         {
            key: 'x-google-smtp-source',
            line:
               'X-Google-Smtp-Source: ANB0VdbxAj9/9XZKUHL9jx0nSYbGuajHGmPxguPW+FEhGCJuOGJ2RrqyFYsyvofywng9iZrYDdrJbKLowWbPIOzf2Fc='
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 2002:aca:cf44:: with SMTP id f65-v6mr423982oig.356.1537326526080;\r\n Tue, 18 Sep 2018 20:08:46 -0700 (PDT)'
         },
         { key: 'mime-version', line: 'MIME-Version: 1.0' },
         {
            key: 'references',
            line:
               'References: <CAAAYr2be1XHkpcnmZKbbPgq4SAeWT7jESCFq4c0uR0LBBwwLzA@mail.gmail.com>\r\n <CACFffUQ2nwg+_Uo1CxG-zbZe+CrvePLSzaChMRTqMpQ1bLHWkA@mail.gmail.com>'
         },
         {
            key: 'in-reply-to',
            line:
               'In-Reply-To: <CACFffUQ2nwg+_Uo1CxG-zbZe+CrvePLSzaChMRTqMpQ1bLHWkA@mail.gmail.com>'
         },
         { key: 'from', line: 'From: Other Person <other@trailimage.com>' },
         { key: 'date', line: 'Date: Tue, 18 Sep 2018 21:08:34 -0600' },
         {
            key: 'message-id',
            line:
               'Message-ID: <CAAAYr2bpkAZ-U8PyojAsppgomJFHS7sbqqHJji7ExPWkPpfayw@mail.gmail.com>'
         },
         { key: 'subject', line: 'Subject: Fwd: Brenna & Piper' },
         { key: 'to', line: 'To: Dad <self@trailimage.com>' },
         {
            key: 'content-type',
            line:
               'Content-Type: multipart/alternative; boundary="0000000000007dbd77057630b982"'
         }
      ],
      html:
         '<div dir="auto"></div><br><div class="gmail_quote"><div dir="ltr">---------- Forwarded message ---------<br>From: <strong class="gmail_sendername" dir="auto">Wings Gymnastics</strong> <span dir="ltr">&lt;<a href="mailto:gymnastics@wingscenter.com">gymnastics@wingscenter.com</a>&gt;</span><br>Date: Tue, Sep 18, 2018, 8:53 PM<br>Subject: Re: Brenna &amp; Piper<br>To: Other Person &lt;<a href="mailto:other@trailimage.com">jessica@trailimage.com</a>&gt;<br></div><br><br><div dir="ltr">Yes. 12:30-2:30. They are signed up.<div><br></div><div>Thanks,</div><div>Megan </div></div><div class="gmail_extra"><br><div class="gmail_quote">On Mon, Sep 17, 2018 at 2:01 PM, Other Person <span dir="ltr">&lt;<a href="mailto:other@trailimage.com" target="_blank" rel="noreferrer">jessica@trailimage.com</a>&gt;</span> wrote:<br><blockquote class="gmail_quote" style="margin:0 0 0 .8ex;border-left:1px #ccc solid;padding-left:1ex"><div dir="ltr">Is there room for them Saturday to both do open gym make-up?<br clear="all"><div><div dir="ltr" class="m_-4687553035673294042m_-1337405570515599359gmail_signature" data-smartmail="gmail_signature"><div dir="ltr"><div><div dir="ltr"><div dir="ltr"><div dir="ltr"><div dir="ltr"><div><br></div><div>Jess</div><div><font face="arial narrow, sans-serif" size="4"><br></font></div><div><span></span></div></div></div></div></div></div></div></div></div></div>\n</blockquote></div><br><br clear="all"><div><br></div>-- <br><div class="m_-4687553035673294042gmail_signature" data-smartmail="gmail_signature"><font color="#3366ff" size="4" face="georgia, serif"><i>Brenda Borup</i></font><div>Gymnastics Director Wings Center</div><div>(208)376-3641 ext.105</div><div>Cell(208) 602-2707</div></div>\n</div>\n</div>\n',
      text:
         '---------- Forwarded message ---------\nFrom: Wings Gymnastics <gymnastics@wingscenter.com>\nDate: Tue, Sep 18, 2018, 8:53 PM\nSubject: Re: Brenna & Piper\nTo: Other Person <other@trailimage.com>\n\n\nYes. 12:30-2:30. They are signed up.\n\nThanks,\nMegan\n\nOn Mon, Sep 17, 2018 at 2:01 PM, Other Person <other@trailimage.com>\nwrote:\n\n> Is there room for them Saturday to both do open gym make-up?\n>\n> Jess\n>\n>\n\n\n-- \n*Brenda Borup*\nGymnastics Director Wings Center\n(208)376-3641 ext.105\nCell(208) 602-2707\n',
      textAsHtml:
         '<p>---------- Forwarded message ---------<br/>From: Wings Gymnastics <a href="mailto:&lt;gymnastics@wingscenter.com">&lt;gymnastics@wingscenter.com</a>&gt;<br/>Date: Tue, Sep 18, 2018, 8:53 PM<br/>Subject: Re: Brenna &amp; Piper<br/>To: Other Person <a href="mailto:&lt;other@trailimage.com">&lt;other@trailimage.com</a>&gt;</p><p>Yes. 12:30-2:30. They are signed up.</p><p>Thanks,<br/>Megan</p><p>On Mon, Sep 17, 2018 at 2:01 PM, Other Person <a href="mailto:&lt;other@trailimage.com">&lt;other@trailimage.com</a>&gt;<br/>wrote:</p><p>&gt; Is there room for them Saturday to both do open gym make-up?<br/>&gt;<br/>&gt; Jess<br/>&gt;<br/>&gt;</p><p>--<br/>*Brenda Borup*<br/>Gymnastics Director Wings Center<br/>(208)376-3641 ext.105<br/>Cell(208) 602-2707</p>',
      subject: 'Fwd: Brenna & Piper',
      references: [
         '<CAAAYr2be1XHkpcnmZKbbPgq4SAeWT7jESCFq4c0uR0LBBwwLzA@mail.gmail.com>',
         '<CACFffUQ2nwg+_Uo1CxG-zbZe+CrvePLSzaChMRTqMpQ1bLHWkA@mail.gmail.com>'
      ],
      date: '2018-09-19T03:08:34.000Z',
      to: {
         value: [{ address: 'self@trailimage.com', name: 'Dad' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Dad</span> &lt;<a href="mailto:self@trailimage.com" class="mp_address_email">self@trailimage.com</a>&gt;</span>',
         text: 'Dad <self@trailimage.com>'
      },
      from: {
         value: [{ address: 'other@trailimage.com', name: 'Other Person' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Other Person</span> &lt;<a href="mailto:other@trailimage.com" class="mp_address_email">other@trailimage.com</a>&gt;</span>',
         text: 'Other Person <other@trailimage.com>'
      },
      messageId:
         '<CAAAYr2bpkAZ-U8PyojAsppgomJFHS7sbqqHJji7ExPWkPpfayw@mail.gmail.com>',
      inReplyTo:
         '<CACFffUQ2nwg+_Uo1CxG-zbZe+CrvePLSzaChMRTqMpQ1bLHWkA@mail.gmail.com>'
   },
   {
      attachments: [],
      headers: {},
      headerLines: [
         { key: 'x-gm-thrid', line: 'X-GM-THRID: 1611790026373766050' },
         {
            key: 'x-gmail-labels',
            line: 'X-Gmail-Labels: Inbox,Important,Family/Jessica'
         },
         { key: 'delivered-to', line: 'Delivered-To: self@trailimage.com' },
         {
            key: 'received',
            line:
               'Received: by 2002:ac8:24dc:0:0:0:0:0 with SMTP id t28-v6csp3315744qtt;\r\n        Sun, 16 Sep 2018 12:31:26 -0700 (PDT)'
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 2002:a9d:1924:: with SMTP id j36-v6mr10266431ota.104.1537126286145;\r\n        Sun, 16 Sep 2018 12:31:26 -0700 (PDT)'
         },
         {
            key: 'arc-seal',
            line:
               'ARC-Seal: i=1; a=rsa-sha256; t=1537126286; cv=none;\r\n        d=google.com; s=arc-20160816;\r\n        b=G1jRZ1eFLuQPxMeO6G4KmLqydA4hRQ0FG0mPHXmdJK8cLO0WGvN3Uf6PWh2RtqUbjd\r\n         qsaaqhZrmfaiPUeHg1FkGm52/txiNDaymHovsC3M/+xfV6IaF3ydQvD0zVoK/7GYwU5Q\r\n         8NSeE6vdewN4P8VqCjM1HBvlYQI/sHdTXSJZWgqIqMYd68hBxPtIoMcj7YCJ8CkzfJls\r\n         hePfoNuYPd0eBR72qdY23b6oWrFNhOZT0QAQdHIR56AxxcM4tHnQEgQntai4UxuJh0wd\r\n         l0qHVQFJ17NjlQC9ctkasJYA1NGu/GtIkSpFb73LhYbW1GggCUbzEhV3ntNotMtB5zZm\r\n         o5Xg=='
         },
         {
            key: 'arc-message-signature',
            line:
               'ARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;\r\n        h=to:subject:message-id:date:from:in-reply-to:references:mime-version\r\n         :dkim-signature;\r\n        bh=ZVnwQczVi4aSw6u2vxHsv9NddRG7H4zGgaxIZkxFWJk=;\r\n        b=lUHiFFBXeISqrML9OcRm1rVTVgpB2ZKHSWurK8BLKnVFcYeor4Jrasu8c+K75dmuNA\r\n         2H4qL2A5gTgWxkeEx0pg9OAcFR9jF+BcVU27B+Qzx0At6J6H93D32uUUEmpj+D9T3IlF\r\n         /uJC/6MUZXdQPc9JwX0gzCUlPk4xI3gaHKlolbNr9nWgU718WdJxBE+i9RIzlYEhqGVp\r\n         A380xBCCxUNsRpgMhFkyydtmbbIaWjs4qa0zVu5g2XLTPkxjmJhAlJBAnMR/0Cn9rs4e\r\n         rZZSQoGsEFh8thMzZR7dSp4/mA88lRlBRlEqvcEp5o3+N36sgGZUpI0P/JEFtXUsBaxt\r\n         aCMg=='
         },
         {
            key: 'arc-authentication-results',
            line:
               'ARC-Authentication-Results: i=1; mx.google.com;\r\n       dkim=pass header.i=@trailimage-com.20150623.gappssmtp.com header.s=20150623 header.b=Mq70yLgc;\r\n       spf=neutral (google.com: 209.85.220.41 is neither permitted nor denied by best guess record for domain of other@trailimage.com) smtp.mailfrom=other@trailimage.com'
         },
         { key: 'return-path', line: 'Return-Path: <other@trailimage.com>' },
         {
            key: 'received',
            line:
               'Received: from mail-sor-f41.google.com (mail-sor-f41.google.com. [209.85.220.41])\r\n        by mx.google.com with SMTPS id z125-v6sor11525630oiz.46.2018.09.16.12.31.25\r\n        for <self@trailimage.com>\r\n        (Google Transport Security);\r\n        Sun, 16 Sep 2018 12:31:26 -0700 (PDT)'
         },
         {
            key: 'received-spf',
            line:
               'Received-SPF: neutral (google.com: 209.85.220.41 is neither permitted nor denied by best guess record for domain of other@trailimage.com) client-ip=209.85.220.41;'
         },
         {
            key: 'authentication-results',
            line:
               'Authentication-Results: mx.google.com;\r\n       dkim=pass header.i=@trailimage-com.20150623.gappssmtp.com header.s=20150623 header.b=Mq70yLgc;\r\n       spf=neutral (google.com: 209.85.220.41 is neither permitted nor denied by best guess record for domain of other@trailimage.com) smtp.mailfrom=other@trailimage.com'
         },
         {
            key: 'dkim-signature',
            line:
               'DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=trailimage-com.20150623.gappssmtp.com; s=20150623;\r\n        h=mime-version:references:in-reply-to:from:date:message-id:subject:to;\r\n        bh=ZVnwQczVi4aSw6u2vxHsv9NddRG7H4zGgaxIZkxFWJk=;\r\n        b=Mq70yLgcazfUMMkkDWAP4OadVoq8WiLt72xa1kQf8K/wLFs5N2aHziwNkloPyj5IlC\r\n         LCqozwAdGJyOeG/RVSJ83Qa4Svh+yH6kpWNh9COiPuabfogrO4NZFWvtxteWhjYJGDJ7\r\n         bFUSI8SdNtQmyIOQxpuyp1JsVnJhyVs9bC8uqQlILNKkCCzyGuMf4Hdr2VbKfF2kObiD\r\n         hFqEqwyFx7vkADce5n2wnGdysMaym3sBb2P+s2sVQo1yJJIIaz1xP3QQ2eKzsjFoDym7\r\n         yY2o70MxL9m5vepnrbROG4yvHJXP4gXBzCRbPKI+q4+n0E9G8vsnzXT+PJoQXJlRFLIR\r\n         axPA=='
         },
         {
            key: 'x-google-dkim-signature',
            line:
               'X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=1e100.net; s=20161025;\r\n        h=x-gm-message-state:mime-version:references:in-reply-to:from:date\r\n         :message-id:subject:to;\r\n        bh=ZVnwQczVi4aSw6u2vxHsv9NddRG7H4zGgaxIZkxFWJk=;\r\n        b=owsouCahBc5n59Z7nJeJv9I/fYu8E59iynxQgZREq5DFnpjV1uggXKQXHuDDTfMUrk\r\n         yTHehnGaq29tkuFW9lGI/5cS83h8f9GQQYD/ylK7JTbxM4cjyscl4/sYxFNm7O3WCHU9\r\n         zW9Iex5DkuGxQDv0t9jmu+chS/iPIqpW6k3OadL1pduv26jPG3l9F/RfCHWozjzIpEVk\r\n         0YESoA89orimQOd4VGAPvJv52GQHz5H+Ja3gEfhklbF5sSRz8jEQN7ioIuj3GHASKOWd\r\n         GNXbh/NwTl/q0L9tx+w+J49nYpcepl2FKjALNFxAhH1wNaAq7zTpy8/StBjwkREi/Ben\r\n         cP+A=='
         },
         {
            key: 'x-gm-message-state',
            line:
               'X-Gm-Message-State: APzg51DqvKvao/rX1mPGINkc0YwRGBUXDpen5EC8Unb0UHoy22ZQ671k\r\n\tD+T2uEcVAU85ZxLqstqBjm/z+4Tu6dbFrccH2k1/0j6EahK72Q=='
         },
         {
            key: 'x-google-smtp-source',
            line:
               'X-Google-Smtp-Source: ANB0VdbRy+SOFQEB3yjARJzNCcr8QW4NoFRuMh0VHwHSqmiHQcEMXbLhBCTMFUgn6TJsq5F7iavhB9ts2Q3qzxQq6z8='
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 2002:aca:5a45:: with SMTP id o66-v6mr15827839oib.155.1537126285356;\r\n Sun, 16 Sep 2018 12:31:25 -0700 (PDT)'
         },
         { key: 'mime-version', line: 'MIME-Version: 1.0' },
         {
            key: 'references',
            line:
               'References: <CA+BiNoojfqkvBnv4=HwgpXxqX4XHmv4v8yfXuU8+2PX=xuvyZQ@mail.gmail.com>'
         },
         {
            key: 'in-reply-to',
            line:
               'In-Reply-To: <CA+BiNoojfqkvBnv4=HwgpXxqX4XHmv4v8yfXuU8+2PX=xuvyZQ@mail.gmail.com>'
         },
         { key: 'from', line: 'From: Other Person <other@trailimage.com>' },
         { key: 'date', line: 'Date: Sun, 16 Sep 2018 13:31:14 -0600' },
         {
            key: 'message-id',
            line:
               'Message-ID: <CAAAYr2YkT=9RcoVj01o_O9LGfaZEfHQV_ReWYTr8pQE_L4t_YA@mail.gmail.com>'
         },
         { key: 'subject', line: 'Subject: Fwd: Class Update' },
         { key: 'to', line: 'To: Dad <self@trailimage.com>' },
         {
            key: 'content-type',
            line:
               'Content-Type: multipart/alternative; boundary="00000000000036c4320576021a2b"'
         }
      ],
      html:
         '<div dir="auto"></div><br><div class="gmail_quote"><div dir="ltr">---------- Forwarded message ---------<br>From: <strong class="gmail_sendername" dir="auto">Kari Merkley</strong> <span dir="ltr">&lt;<a href="mailto:kari.nobody@boisething.org">kari.nobody@boisething.org</a>&gt;</span><br>Date: Sun, Sep 16, 2018, 12:32 PM<br>Subject: Class Update<br>To: KARI MERKLEY &lt;<a href="mailto:kari.nobody@boisething.org">kari.merkley@boiseschools.org</a>&gt;<br></div><br><br><div dir="ltr">Happy Sunday Afternoon!<div><br></div><div><u>Planetarium Field Trip:</u></div><div><u><br></u></div><div>We will be going to the planetarium at Capital High School on Wednesday, Sept 19th.  Sorry for the short notice on this.  If kids can bring lunches from home that day, that would help crowding in the cafeteria line since we will need to eat early.  If they need to have hot lunch, that is ok!  Lunch will be at 12:00.  We will leave at 12:30 and return at 2:30.  </div><div><br></div><div><br></div><div><u>Daily Assignments &amp; Homework:</u></div><div><u><br></u></div><div>I am doing a lot of intervention in class to be sure work is being completed on time.  This is typical for the beginning of the year, but I expect that students will take this on more independently as we progress.  Please check to see that work folders are coming home each night with assignments sorted as to whether they are &quot;finished&quot; or &quot;unfinished&quot;.  ALL papers in this folder should be marked with due dates on the top.  Just a reminder, IF most of this is NOT done, it is because class time was not used efficiently.  There is very little here that should need to be done at home!</div><div><br></div><div>As for <u>work done at home</u>, students are doing a great job in keeping up with their Reading Contracts!  Many of them have read far more than the minimum expectations. </div><div><br></div><div>Some students do need to be more responsible in completing the 60 minutes/week of IXL practice in language and math.  Students get a grade each week for completion of this practice.  If a student completes 40 minutes of 60, that is a 67%.   On occasion, students may have time to do this during the independent work time for math when their daily assignment is complete.  If your student is telling you that they have no homework, check their minutes on IXL.  </div><div><br></div><div>The assigned topics support the concepts we are learning in class and allow for greater understanding, fluency, and mastery of the material.  We have intentionally shortened the daily assignments to accommodate for the 10-15 minutes of daily practice on IXL.   </div><div><br></div><div>Below are the assigned topics to choose from for the upcoming week. I DO NOT expect that they will complete all of these!  If you have questions about this, please let me know.   <br></div><div><br></div><div><br></div><div>Grade 5 Math:  G.1-G.5  Decimal Place Value</div><div>Grade 5 Language:  E.2- E.3  Similes &amp; Metaphors  </div><div>Language Challenge Option Grade 6:  E.5 Figurative Language </div><div><br></div><div>:)</div><div><br></div></div>\n</div>\n',
      text:
         '---------- Forwarded message ---------\nFrom: Kari Merkley <kari.nobody@boisething.org>\nDate: Sun, Sep 16, 2018, 12:32 PM\nSubject: Class Update\nTo: KARI MERKLEY <kari.nobody@boisething.org>\n\n\nHappy Sunday Afternoon!\n\n*Planetarium Field Trip:*\n\nWe will be going to the planetarium at Capital High School on Wednesday,\nSept 19th.  Sorry for the short notice on this.  If kids can bring lunches\nfrom home that day, that would help crowding in the cafeteria line since we\nwill need to eat early.  If they need to have hot lunch, that is ok!  Lunch\nwill be at 12:00.  We will leave at 12:30 and return at 2:30.\n\n\n*Daily Assignments & Homework:*\n\nI am doing a lot of intervention in class to be sure work is being\ncompleted on time.  This is typical for the beginning of the year, but I\nexpect that students will take this on more independently as we progress.\nPlease check to see that work folders are coming home each night with\nassignments sorted as to whether they are "finished" or "unfinished".  ALL\npapers in this folder should be marked with due dates on the top.  Just a\nreminder, IF most of this is NOT done, it is because class time was not\nused efficiently.  There is very little here that should need to be done at\nhome!\n\nAs for *work done at home*, students are doing a great job in keeping up\nwith their Reading Contracts!  Many of them have read far more than the\nminimum expectations.\n\nSome students do need to be more responsible in completing the 60\nminutes/week of IXL practice in language and math.  Students get a grade\neach week for completion of this practice.  If a student completes 40\nminutes of 60, that is a 67%.   On occasion, students may have time to do\nthis during the independent work time for math when their daily assignment\nis complete.  If your student is telling you that they have no homework,\ncheck their minutes on IXL.\n\nThe assigned topics support the concepts we are learning in class and allow\nfor greater understanding, fluency, and mastery of the material.  We have\nintentionally shortened the daily assignments to accommodate for the 10-15\nminutes of daily practice on IXL.\n\nBelow are the assigned topics to choose from for the upcoming week. I DO\nNOT expect that they will complete all of these!  If you have questions\nabout this, please let me know.\n\n\nGrade 5 Math:  G.1-G.5  Decimal Place Value\nGrade 5 Language:  E.2- E.3  Similes & Metaphors\nLanguage Challenge Option Grade 6:  E.5 Figurative Language\n\n:)\n',
      textAsHtml:
         '<p>---------- Forwarded message ---------<br/>From: Kari Merkley <a href="mailto:&lt;kari.nobody@boisething.org">&lt;kari.nobody@boisething.org</a>&gt;<br/>Date: Sun, Sep 16, 2018, 12:32 PM<br/>Subject: Class Update<br/>To: KARI MERKLEY <a href="mailto:&lt;kari.nobody@boisething.org">&lt;kari.nobody@boisething.org</a>&gt;</p><p>Happy Sunday Afternoon!</p><p>*Planetarium Field Trip:*</p><p>We will be going to the planetarium at Capital High School on Wednesday,<br/>Sept 19th.  Sorry for the short notice on this.  If kids can bring lunches<br/>from home that day, that would help crowding in the cafeteria line since we<br/>will need to eat early.  If they need to have hot lunch, that is ok!  Lunch<br/>will be at 12:00.  We will leave at 12:30 and return at 2:30.</p><p>*Daily Assignments &amp; Homework:*</p><p>I am doing a lot of intervention in class to be sure work is being<br/>completed on time.  This is typical for the beginning of the year, but I<br/>expect that students will take this on more independently as we progress.<br/>Please check to see that work folders are coming home each night with<br/>assignments sorted as to whether they are &quot;finished&quot; or &quot;unfinished&quot;.  ALL<br/>papers in this folder should be marked with due dates on the top.  Just a<br/>reminder, IF most of this is NOT done, it is because class time was not<br/>used efficiently.  There is very little here that should need to be done at<br/>home!</p><p>As for *work done at home*, students are doing a great job in keeping up<br/>with their Reading Contracts!  Many of them have read far more than the<br/>minimum expectations.</p><p>Some students do need to be more responsible in completing the 60<br/>minutes/week of IXL practice in language and math.  Students get a grade<br/>each week for completion of this practice.  If a student completes 40<br/>minutes of 60, that is a 67%.   On occasion, students may have time to do<br/>this during the independent work time for math when their daily assignment<br/>is complete.  If your student is telling you that they have no homework,<br/>check their minutes on IXL.</p><p>The assigned topics support the concepts we are learning in class and allow<br/>for greater understanding, fluency, and mastery of the material.  We have<br/>intentionally shortened the daily assignments to accommodate for the 10-15<br/>minutes of daily practice on IXL.</p><p>Below are the assigned topics to choose from for the upcoming week. I DO<br/>NOT expect that they will complete all of these!  If you have questions<br/>about this, please let me know.</p><p>Grade 5 Math:  G.1-G.5  Decimal Place Value<br/>Grade 5 Language:  E.2- E.3  Similes &amp; Metaphors<br/>Language Challenge Option Grade 6:  E.5 Figurative Language</p><p>:)</p>',
      subject: 'Fwd: Class Update',
      references:
         '<CA+BiNoojfqkvBnv4=HwgpXxqX4XHmv4v8yfXuU8+2PX=xuvyZQ@mail.gmail.com>',
      date: '2018-09-16T19:31:14.000Z',
      to: {
         value: [{ address: 'self@trailimage.com', name: 'Dad' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Dad</span> &lt;<a href="mailto:self@trailimage.com" class="mp_address_email">self@trailimage.com</a>&gt;</span>',
         text: 'Dad <self@trailimage.com>'
      },
      from: {
         value: [{ address: 'other@trailimage.com', name: 'Other Person' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Other Person</span> &lt;<a href="mailto:other@trailimage.com" class="mp_address_email">other@trailimage.com</a>&gt;</span>',
         text: 'Other Person <other@trailimage.com>'
      },
      messageId:
         '<CAAAYr2YkT=9RcoVj01o_O9LGfaZEfHQV_ReWYTr8pQE_L4t_YA@mail.gmail.com>',
      inReplyTo:
         '<CA+BiNoojfqkvBnv4=HwgpXxqX4XHmv4v8yfXuU8+2PX=xuvyZQ@mail.gmail.com>'
   },
   {
      attachments: [],
      headers: {},
      headerLines: [
         { key: 'x-gm-thrid', line: 'X-GM-THRID: 1611790026373766050' },
         { key: 'x-gmail-labels', line: 'X-Gmail-Labels: Inbox,Important' },
         { key: 'delivered-to', line: 'Delivered-To: self@trailimage.com' },
         {
            key: 'received',
            line:
               'Received: by 2002:ac8:24dc:0:0:0:0:0 with SMTP id t28-v6csp3273648qtt;\r\n        Sun, 16 Sep 2018 11:32:31 -0700 (PDT)'
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 2002:a6b:ac45:: with SMTP id v66-v6mr19206662ioe.66.1537122751787;\r\n        Sun, 16 Sep 2018 11:32:31 -0700 (PDT)'
         },
         {
            key: 'arc-seal',
            line:
               'ARC-Seal: i=3; a=rsa-sha256; t=1537122751; cv=pass;\r\n        d=google.com; s=arc-20160816;\r\n        b=oKwRLe71+5eoTnVtxlxqlfJzu3OKBHB87PNDTVmXy9RVvWjQFlVA1CzC7gOqgd8EjW\r\n         EXeAdd5NPI1OUkVNE47ytgrPmgJuSCXKm2j9d3uyxCKrMei/ZWx/tvbVjJYjXcx8XUDZ\r\n         bZhK7/UgOZfsGOijSkgBft7pfoXpcQznOWbGi8GFVlvmlINOD04rpSssp08uQGk8sIXv\r\n         DkZQjIzpjMdtLOt9nC4edFCNbYRC5k+/K9m5NvKyczaxyWXwnAMlGoJDcbKywJkqPtjd\r\n         QCF8yIVQ480X2CSlft6djF80O475CZUZeJxQV5yOQy/vB3gQDHiXqbt0nPMz6XQXQRlv\r\n         UnEQ=='
         },
         {
            key: 'arc-message-signature',
            line:
               'ARC-Message-Signature: i=3; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;\r\n        h=list-help:list-id:mailing-list:precedence:to:subject:message-id\r\n         :date:from:mime-version:dkim-signature;\r\n        bh=DdVH7am8oallFUqcSJcz8VJaPhzUkOpqPdF5Ohckkps=;\r\n        b=En331qSROYY8wT037z6cSkkJYE0fD0paBgNYVll8yCoRfQj+0buqkyzvG1Uj0szOEs\r\n         Swps1SXPDvx4syzhjhhB+/pyLF3ADtGd+riUcYwSJ5Xrbk/RDATpw7ipGEv8wBTyU8Xy\r\n         xg0sWbpTJv2GP3QX0cLGiBXjUQvRNKUMfdGcSnXlnRzCQZB0X7icJMJQME+gZgqoR3Mw\r\n         UXMUFbfik/xTW+0Vamswv+gt+q0asGUPJ8+ZnOdoO1b+LbgXBCFhqz4wLOpsOeu3WChB\r\n         DPfskByLiTxb7mkpUQLDvIfSJBLBLAH0IQPE/J8OokA6uZdmmZ/smIlsFvNZKfTf/BA0\r\n         rkEQ=='
         },
         {
            key: 'arc-authentication-results',
            line:
               'ARC-Authentication-Results: i=3; mx.google.com;\r\n       dkim=pass header.i=@trailimage-com.20150623.gappssmtp.com header.s=20150623 header.b=KR8mzPdo;\r\n       arc=pass (i=2 spf=pass spfdomain=boiseschools.org);\r\n       spf=neutral (google.com: 209.85.220.69 is neither permitted nor denied by best guess record for domain of school+bncbc4nxjgmvicbbp6d7loakgqee64g4ha@trailimage.com) smtp.mailfrom=school+bncBC4NXJGMVICBBP6D7LOAKGQEE64G4HA@trailimage.com'
         },
         {
            key: 'return-path',
            line:
               'Return-Path: <school+bncBC4NXJGMVICBBP6D7LOAKGQEE64G4HA@trailimage.com>'
         },
         {
            key: 'received',
            line:
               'Received: from mail-sor-f69.google.com (mail-sor-f69.google.com. [209.85.220.69])\r\n        by mx.google.com with SMTPS id 190-v6sor2204103itl.67.2018.09.16.11.32.31\r\n        for <self@trailimage.com>\r\n        (Google Transport Security);\r\n        Sun, 16 Sep 2018 11:32:31 -0700 (PDT)'
         },
         {
            key: 'received-spf',
            line:
               'Received-SPF: neutral (google.com: 209.85.220.69 is neither permitted nor denied by best guess record for domain of school+bncbc4nxjgmvicbbp6d7loakgqee64g4ha@trailimage.com) client-ip=209.85.220.69;'
         },
         {
            key: 'authentication-results',
            line:
               'Authentication-Results: mx.google.com;\r\n       dkim=pass header.i=@trailimage-com.20150623.gappssmtp.com header.s=20150623 header.b=KR8mzPdo;\r\n       arc=pass (i=2 spf=pass spfdomain=boiseschools.org);\r\n       spf=neutral (google.com: 209.85.220.69 is neither permitted nor denied by best guess record for domain of school+bncbc4nxjgmvicbbp6d7loakgqee64g4ha@trailimage.com) smtp.mailfrom=school+bncBC4NXJGMVICBBP6D7LOAKGQEE64G4HA@trailimage.com'
         },
         {
            key: 'arc-seal',
            line:
               'ARC-Seal: i=2; a=rsa-sha256; t=1537122751; cv=pass;\r\n        d=google.com; s=arc-20160816;\r\n        b=M/tRaFD8PUnoMR7Vi3+UiRRwzc5DQ01UD9jkfXIdCgebKt/Jk4DNEg2GPVvwlLUkdi\r\n         GSt89qbiOwVdPVi2KwLRF/GtxaR226xnPI2gahcOa39OLHVuyL2/PM02aN1Hj+qtF8Ab\r\n         PLjYA/SbbutK8hERCMUd9GwyVq0EOTWc+oMW2U75E+amyGp3/meZgtab97XAMCFc2KCz\r\n         K8FRsQdugC9uXve9eSIMIVVO1Q6N0mia2hiYxySLPIFHQhzJG1ZMobm5RM//F/0LUh5C\r\n         iTJR1soHyb1+Tr8Bb9aUtWNE5s0u8Czw5yJcXqAL89Iv2GTeGLOhW+vMUimN8P0VVyez\r\n         dohw=='
         },
         {
            key: 'arc-message-signature',
            line:
               'ARC-Message-Signature: i=2; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;\r\n        h=list-help:list-id:mailing-list:precedence:to:subject:message-id\r\n         :date:from:mime-version:dkim-signature;\r\n        bh=DdVH7am8oallFUqcSJcz8VJaPhzUkOpqPdF5Ohckkps=;\r\n        b=xcvFD1znJd2khFZRUaaQ/i8H2szi0tXo4hfUAWBLCAX7pJOH3DmN8zH3ZFxqp10xuK\r\n         mkNvo83R4r2jjIzFhOo5l0vkePqajsQvA1Eme+aPTyGjlenKVUuss3vJUVNhClNQ8cjN\r\n         n5nsOCvX+HtIb4R7IslhiJuHJ9cKvPZZECBhC+iRyagZeD8XW/Zrw0BTZhGLX9WU0yGG\r\n         oxqfeFDJhDdr58CQyLLnOkYaQiYaA+DSK+lSQoGdR8Nfd2f0qsb4LWWSgGgB13PVx3lG\r\n         jNxCwl+3yzSqdhEJKWcTDUol48eoWnVCZ0v0XFZspTEMQvaWOE9OhTKMF+3f8RJxuczT\r\n         soiw=='
         },
         {
            key: 'arc-authentication-results',
            line:
               'ARC-Authentication-Results: i=2; mx.google.com;\r\n       dkim=fail header.i=@boiseschools.org header.s=google header.b=FGdFY7qV;\r\n       spf=pass (google.com: domain of kari.nobody@boisething.org designates 209.85.220.65 as permitted sender) smtp.mailfrom=kari.nobody@boisething.org'
         },
         {
            key: 'dkim-signature',
            line:
               'DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=trailimage-com.20150623.gappssmtp.com; s=20150623;\r\n        h=mime-version:from:date:message-id:subject:to:x-original-sender\r\n         :x-original-authentication-results:precedence:mailing-list:list-id\r\n         :list-help;\r\n        bh=DdVH7am8oallFUqcSJcz8VJaPhzUkOpqPdF5Ohckkps=;\r\n        b=KR8mzPdo63wqv5lLpymsofV5mWpDLlSITov05peJL029FhX4RemddmC9nbLifxjXVQ\r\n         2y7esvXT3T0NOLpLzuSOZGucJgVsCilqQt5MaVaPAeH8Xa7tIj7vxU4Q1gJUTXYhmr8h\r\n         pAbAw+43+WAFYBCtu4f9IS3WxDTeahqoLpl49betMVzHeuIOW9pB9iikW3t3406dAxNt\r\n         MtGsNSSWE+xi5DmUFoGVu5EX5Y4tPmYr/V/3svNzSC1khDBAcE4zd4NE2mfnd0fnvjQe\r\n         Cj0hN3hUdR/FiqejasGo8VRoWAq6xwuo50Tri3z6fVdopVAUxjJG/eARhx3tbZwUwg8C\r\n         U0Lw=='
         },
         {
            key: 'x-google-dkim-signature',
            line:
               'X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=1e100.net; s=20161025;\r\n        h=x-gm-message-state:mime-version:from:date:message-id:subject:to\r\n         :x-original-sender:x-original-authentication-results:precedence\r\n         :mailing-list:list-id:x-spam-checked-in-group:list-help;\r\n        bh=DdVH7am8oallFUqcSJcz8VJaPhzUkOpqPdF5Ohckkps=;\r\n        b=TEHuxu9om6OiPRjfabCF9GJlzRPUtKas5cQkwHBDilo9Cz3T2kxTYat4nt7tFn5Tk7\r\n         NPNQphcM5E3fHx+xc8zGo4/HhkSrzIUTW1vUXtSfKryMc20GSNlYh6DmGijS1ODV6t7i\r\n         a+fehmencCPSPSola28l6/Gpy9K4YLFZrYNQKiXYF8Q0gf39NWfOFcI5U5KDf9gKcWTF\r\n         GXSTRLg60IDEhsXSDWLE3HpOOTbw8SMyw1QtnPE654fGnfMdwTXj16QBp2EGYgOL9wf9\r\n         IaFu+r2Boz65+q6CJdTVpLjKxuItmRrwBHIPIDpa9eDVoAwXdc9Zs9LLU8qMer4b3uIA\r\n         sHLQ=='
         },
         {
            key: 'x-gm-message-state',
            line:
               'X-Gm-Message-State: APzg51A+fxr5njzN37MLAF5N9N6xMR/u1Rmx5lJTTO11szf/7gQEArv1\r\n\t7rqx1LWEWslkAb2DejdJfnJJzudU'
         },
         {
            key: 'x-google-smtp-source',
            line:
               'X-Google-Smtp-Source: ANB0VdagRL5J9HNkCunr2hRzThkfg2Uc8TMoWKXWIwVBn5DGT/5pDB42xOgNHPZVUt5QC20S4tDi2A=='
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 2002:a24:a85:: with SMTP id 127-v6mr9876149itw.9.1537122751544;\r\n        Sun, 16 Sep 2018 11:32:31 -0700 (PDT)'
         },
         { key: 'x-beenthere', line: 'X-BeenThere: school@trailimage.com' },
         {
            key: 'received',
            line:
               'Received: by 2002:a24:ac4d:: with SMTP id m13-v6ls980827iti.8.gmail; Sun, 16\r\n Sep 2018 11:32:31 -0700 (PDT)'
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 2002:a24:bc84:: with SMTP id n126-v6mr9353234ite.152.1537122751309;\r\n        Sun, 16 Sep 2018 11:32:31 -0700 (PDT)'
         },
         {
            key: 'arc-seal',
            line:
               'ARC-Seal: i=1; a=rsa-sha256; t=1537122751; cv=none;\r\n        d=google.com; s=arc-20160816;\r\n        b=inFrEeUZ6ue1SX6LEoIFqM8tFM0OB3F726RUiW2yQ84rwHsyYh9h9H1UTE+6bxZD78\r\n         HA0BRHdX7AROTsXCthnIEl1sCPkyqQipGXaQASUhi0+V8RRJEaD4i9T6aKd98RgmHuiv\r\n         koN/s/TD14csvoaxksgFoXzHI3bxrQeJgo8ljaWMecTBTNvl/prJKsQaEkwgAX7uBspJ\r\n         JduiRMBl0/V8/bzlODb5Sms1hTgAiI9gsRQw6SFQ2oD2qIP1QQ7ZZ5g//9YNmCLFikPn\r\n         sd//tojn6/+Xr2I9EiTCmMd9LV5adqNYmKjn0VNMJpY3JuWaekbYhuS/HHv8+5pU8lal\r\n         8c8w=='
         },
         {
            key: 'arc-message-signature',
            line:
               'ARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;\r\n        h=to:subject:message-id:date:from:mime-version:dkim-signature;\r\n        bh=DdVH7am8oallFUqcSJcz8VJaPhzUkOpqPdF5Ohckkps=;\r\n        b=FJw/lEcTKjTw7a+kFBQRo1Q9ud71GdWBsQ6mGUNtteOApmJRoPHdmcCnK6WWh8bXnT\r\n         KzWTrJV+m64+hYzl+4V4ybuY813iPIvbNjWcGAT1ZA9YN6li4V2EyMgNYCQffxBVWAdD\r\n         PhEL23k35VKaZ3/saqq7UL2sz7xhknbtnLyk9z9qrWu25+CiosdHNCXAEh96FM68oyA2\r\n         DM6LFxtoP8F2xBYuEumg4R29ASCP8JtlvhUXbmr9BQvedGI9kWMjcxTCqCjy1v5+uk8/\r\n         6fIp++g1TXUf/qCq9jrobyApmjz2+iuwawKXyYJuojvrMUWBtOcCHbOT0Dvgoc8oqFdy\r\n         eeUQ=='
         },
         {
            key: 'arc-authentication-results',
            line:
               'ARC-Authentication-Results: i=1; mx.google.com;\r\n       dkim=fail header.i=@boiseschools.org header.s=google header.b=FGdFY7qV;\r\n       spf=pass (google.com: domain of kari.nobody@boisething.org designates 209.85.220.65 as permitted sender) smtp.mailfrom=kari.nobody@boisething.org'
         },
         {
            key: 'received',
            line:
               'Received: from mail-sor-f65.google.com (mail-sor-f65.google.com. [209.85.220.65])\r\n        by mx.google.com with SMTPS id x12-v6sor2864204ite.47.2018.09.16.11.32.31\r\n        for <school@trailimage.com>\r\n        (Google Transport Security);\r\n        Sun, 16 Sep 2018 11:32:31 -0700 (PDT)'
         },
         {
            key: 'received-spf',
            line:
               'Received-SPF: pass (google.com: domain of kari.nobody@boisething.org designates 209.85.220.65 as permitted sender) client-ip=209.85.220.65;'
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 2002:a24:3fc6:: with SMTP id d189-v6mr9650581ita.64.1537122750694;\r\n Sun, 16 Sep 2018 11:32:30 -0700 (PDT)'
         },
         { key: 'mime-version', line: 'MIME-Version: 1.0' },
         {
            key: 'received',
            line:
               'Received: by 2002:a6b:1f92:0:0:0:0:0 with HTTP; Sun, 16 Sep 2018 11:32:30\r\n -0700 (PDT)'
         },
         {
            key: 'from',
            line: 'From: Kari Merkley <kari.nobody@boisething.org>'
         },
         { key: 'date', line: 'Date: Sun, 16 Sep 2018 12:32:30 -0600' },
         {
            key: 'message-id',
            line:
               'Message-ID: <CA+BiNoojfqkvBnv4=HwgpXxqX4XHmv4v8yfXuU8+2PX=xuvyZQ@mail.gmail.com>'
         },
         { key: 'subject', line: 'Subject: Class Update' },
         { key: 'to', line: 'To: KARI MERKLEY <kari.nobody@boisething.org>' },
         {
            key: 'content-type',
            line:
               'Content-Type: multipart/alternative; boundary="0000000000008824a20576014767"'
         },
         { key: 'bcc', line: 'Bcc: school@trailimage.com' },
         {
            key: 'x-original-sender',
            line: 'X-Original-Sender: kari.nobody@boisething.org'
         },
         {
            key: 'x-original-authentication-results',
            line:
               'X-Original-Authentication-Results: mx.google.com;       dkim=fail\r\n header.i=@boiseschools.org header.s=google header.b=FGdFY7qV;       spf=pass\r\n (google.com: domain of kari.nobody@boisething.org designates 209.85.220.65\r\n as permitted sender) smtp.mailfrom=kari.nobody@boisething.org'
         },
         { key: 'precedence', line: 'Precedence: list' },
         {
            key: 'mailing-list',
            line:
               'Mailing-list: list school@trailimage.com; contact school+owners@trailimage.com'
         },
         { key: 'list-id', line: 'List-ID: <school.trailimage.com>' },
         {
            key: 'x-spam-checked-in-group',
            line: 'X-Spam-Checked-In-Group: school@trailimage.com'
         },
         { key: 'x-google-group-id', line: 'X-Google-Group-Id: 643934133648' },
         {
            key: 'list-help',
            line:
               'List-Help: <https://support.google.com/a/trailimage.com/bin/topic.py?topic=25838>,\r\n <mailto:school+help@trailimage.com>'
         }
      ],
      html:
         '<div dir="ltr">Happy Sunday Afternoon!<div><br></div><div><u>Planetarium Field Trip:</u></div><div><u><br></u></div><div>We will be going to the planetarium at Capital High School on Wednesday, Sept 19th.  Sorry for the short notice on this.  If kids can bring lunches from home that day, that would help crowding in the cafeteria line since we will need to eat early.  If they need to have hot lunch, that is ok!  Lunch will be at 12:00.  We will leave at 12:30 and return at 2:30.  </div><div><br></div><div><br></div><div><u>Daily Assignments &amp; Homework:</u></div><div><u><br></u></div><div>I am doing a lot of intervention in class to be sure work is being completed on time.  This is typical for the beginning of the year, but I expect that students will take this on more independently as we progress.  Please check to see that work folders are coming home each night with assignments sorted as to whether they are &quot;finished&quot; or &quot;unfinished&quot;.  ALL papers in this folder should be marked with due dates on the top.  Just a reminder, IF most of this is NOT done, it is because class time was not used efficiently.  There is very little here that should need to be done at home!</div><div><br></div><div>As for <u>work done at home</u>, students are doing a great job in keeping up with their Reading Contracts!  Many of them have read far more than the minimum expectations. </div><div><br></div><div>Some students do need to be more responsible in completing the 60 minutes/week of IXL practice in language and math.  Students get a grade each week for completion of this practice.  If a student completes 40 minutes of 60, that is a 67%.   On occasion, students may have time to do this during the independent work time for math when their daily assignment is complete.  If your student is telling you that they have no homework, check their minutes on IXL.  </div><div><br></div><div>The assigned topics support the concepts we are learning in class and allow for greater understanding, fluency, and mastery of the material.  We have intentionally shortened the daily assignments to accommodate for the 10-15 minutes of daily practice on IXL.   </div><div><br></div><div>Below are the assigned topics to choose from for the upcoming week. I DO NOT expect that they will complete all of these!  If you have questions about this, please let me know.   <br></div><div><br></div><div><br></div><div>Grade 5 Math:  G.1-G.5  Decimal Place Value</div><div>Grade 5 Language:  E.2- E.3  Similes &amp; Metaphors  </div><div>Language Challenge Option Grade 6:  E.5 Figurative Language </div><div><br></div><div>:)</div><div><br></div></div>\n',
      text:
         'Happy Sunday Afternoon!\n\n*Planetarium Field Trip:*\n\nWe will be going to the planetarium at Capital High School on Wednesday,\nSept 19th.  Sorry for the short notice on this.  If kids can bring lunches\nfrom home that day, that would help crowding in the cafeteria line since we\nwill need to eat early.  If they need to have hot lunch, that is ok!  Lunch\nwill be at 12:00.  We will leave at 12:30 and return at 2:30.\n\n\n*Daily Assignments & Homework:*\n\nI am doing a lot of intervention in class to be sure work is being\ncompleted on time.  This is typical for the beginning of the year, but I\nexpect that students will take this on more independently as we progress.\nPlease check to see that work folders are coming home each night with\nassignments sorted as to whether they are "finished" or "unfinished".  ALL\npapers in this folder should be marked with due dates on the top.  Just a\nreminder, IF most of this is NOT done, it is because class time was not\nused efficiently.  There is very little here that should need to be done at\nhome!\n\nAs for *work done at home*, students are doing a great job in keeping up\nwith their Reading Contracts!  Many of them have read far more than the\nminimum expectations.\n\nSome students do need to be more responsible in completing the 60\nminutes/week of IXL practice in language and math.  Students get a grade\neach week for completion of this practice.  If a student completes 40\nminutes of 60, that is a 67%.   On occasion, students may have time to do\nthis during the independent work time for math when their daily assignment\nis complete.  If your student is telling you that they have no homework,\ncheck their minutes on IXL.\n\nThe assigned topics support the concepts we are learning in class and allow\nfor greater understanding, fluency, and mastery of the material.  We have\nintentionally shortened the daily assignments to accommodate for the 10-15\nminutes of daily practice on IXL.\n\nBelow are the assigned topics to choose from for the upcoming week. I DO\nNOT expect that they will complete all of these!  If you have questions\nabout this, please let me know.\n\n\nGrade 5 Math:  G.1-G.5  Decimal Place Value\nGrade 5 Language:  E.2- E.3  Similes & Metaphors\nLanguage Challenge Option Grade 6:  E.5 Figurative Language\n\n:)\n',
      textAsHtml:
         '<p>Happy Sunday Afternoon!</p><p>*Planetarium Field Trip:*</p><p>We will be going to the planetarium at Capital High School on Wednesday,<br/>Sept 19th.  Sorry for the short notice on this.  If kids can bring lunches<br/>from home that day, that would help crowding in the cafeteria line since we<br/>will need to eat early.  If they need to have hot lunch, that is ok!  Lunch<br/>will be at 12:00.  We will leave at 12:30 and return at 2:30.</p><p>*Daily Assignments &amp; Homework:*</p><p>I am doing a lot of intervention in class to be sure work is being<br/>completed on time.  This is typical for the beginning of the year, but I<br/>expect that students will take this on more independently as we progress.<br/>Please check to see that work folders are coming home each night with<br/>assignments sorted as to whether they are &quot;finished&quot; or &quot;unfinished&quot;.  ALL<br/>papers in this folder should be marked with due dates on the top.  Just a<br/>reminder, IF most of this is NOT done, it is because class time was not<br/>used efficiently.  There is very little here that should need to be done at<br/>home!</p><p>As for *work done at home*, students are doing a great job in keeping up<br/>with their Reading Contracts!  Many of them have read far more than the<br/>minimum expectations.</p><p>Some students do need to be more responsible in completing the 60<br/>minutes/week of IXL practice in language and math.  Students get a grade<br/>each week for completion of this practice.  If a student completes 40<br/>minutes of 60, that is a 67%.   On occasion, students may have time to do<br/>this during the independent work time for math when their daily assignment<br/>is complete.  If your student is telling you that they have no homework,<br/>check their minutes on IXL.</p><p>The assigned topics support the concepts we are learning in class and allow<br/>for greater understanding, fluency, and mastery of the material.  We have<br/>intentionally shortened the daily assignments to accommodate for the 10-15<br/>minutes of daily practice on IXL.</p><p>Below are the assigned topics to choose from for the upcoming week. I DO<br/>NOT expect that they will complete all of these!  If you have questions<br/>about this, please let me know.</p><p>Grade 5 Math:  G.1-G.5  Decimal Place Value<br/>Grade 5 Language:  E.2- E.3  Similes &amp; Metaphors<br/>Language Challenge Option Grade 6:  E.5 Figurative Language</p><p>:)</p>',
      subject: 'Class Update',
      date: '2018-09-16T18:32:30.000Z',
      to: {
         value: [
            { address: 'kari.nobody@boisething.org', name: 'KARI MERKLEY' }
         ],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">KARI MERKLEY</span> &lt;<a href="mailto:kari.nobody@boisething.org" class="mp_address_email">kari.nobody@boisething.org</a>&gt;</span>',
         text: 'KARI MERKLEY <kari.nobody@boisething.org>'
      },
      from: {
         value: [
            { address: 'kari.nobody@boisething.org', name: 'Kari Merkley' }
         ],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Kari Merkley</span> &lt;<a href="mailto:kari.nobody@boisething.org" class="mp_address_email">kari.nobody@boisething.org</a>&gt;</span>',
         text: 'Kari Merkley <kari.nobody@boisething.org>'
      },
      bcc: {
         value: [{ address: 'school@trailimage.com', name: '' }],
         html:
            '<span class="mp_address_group"><a href="mailto:school@trailimage.com" class="mp_address_email">school@trailimage.com</a></span>',
         text: 'school@trailimage.com'
      },
      messageId:
         '<CA+BiNoojfqkvBnv4=HwgpXxqX4XHmv4v8yfXuU8+2PX=xuvyZQ@mail.gmail.com>'
   },
   {
      attachments: [],
      headers: {},
      headerLines: [
         { key: 'x-gm-thrid', line: 'X-GM-THRID: 1612158008580388712' },
         {
            key: 'x-gmail-labels',
            line: 'X-Gmail-Labels: Important,Trash,Family/Jessica'
         },
         { key: 'delivered-to', line: 'Delivered-To: self@trailimage.com' },
         {
            key: 'received',
            line:
               'Received: by 2002:ac8:24ed:0:0:0:0:0 with SMTP id t42-v6csp1107844qtt;\r\n        Thu, 20 Sep 2018 13:01:27 -0700 (PDT)'
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 2002:a9d:18e:: with SMTP id e14-v6mr21505348ote.88.1537473686962;\r\n        Thu, 20 Sep 2018 13:01:26 -0700 (PDT)'
         },
         {
            key: 'arc-seal',
            line:
               'ARC-Seal: i=1; a=rsa-sha256; t=1537473686; cv=none;\r\n        d=google.com; s=arc-20160816;\r\n        b=lmC8n6bAHs0SSdsJNQT+UCqCH/uhI5GB/ZYRXoqHHT6UlvFPCQuBkhQsgyRfmBD/Qc\r\n         7Jut9cM5RlQDdxPr7b84dvUNgbLkRIWFpETwTD4wXdY3Ccfb1oqZ2xdDQWLYLYnOTNmo\r\n         0ZIWiQ4oMdXlCilq2iiuizFFixiFySBv/oP0vkFKy70jqZ4VNSMyFnG7akDRA6cwwTQt\r\n         0f+++tgz0+9mKPWxHMRM5hjSMFeiNE4IFmLIB+MRkqL/iG/uRuI6ROAM+lIFK5ObPq1c\r\n         9E4Oqcky9EfS5/GMbDaW8Pft4WsSw5vcHVWSkg4BdqBcr1K08SGVNA55C2n0UrKYL+Bf\r\n         coHA=='
         },
         {
            key: 'arc-message-signature',
            line:
               'ARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;\r\n        h=to:subject:message-id:date:from:in-reply-to:references:mime-version\r\n         :dkim-signature;\r\n        bh=OYytObiJhkaunELiOtYRN6xsfNlWhlFEAdKSe/oBZnM=;\r\n        b=xymbE8RfO9gO2Ubt/E2s7urb7+oigbBGgySSxVYYlmcPOGFNuYgNefH5bibEmfCCdn\r\n         lSUHR9UiH6HL3BsS24fOZ5RMAe5w3Zh3BqV5V4Bik5mTHtlKSTsrJqcriTicesoJCmrn\r\n         ucRCsUFHe9eNDr9ou27PUTfCklKg9j0T2fkujcSgkhnOZplMjiKi9zmsmdOY86YTltqG\r\n         OjS0PlZQxv5oLfW5oPoc4/v0ay+bkLlk4LpezqfDQ3I/lbTVjOzUZXVQf0QpClLkKLxo\r\n         NnqaDEO+lltofScc7mySJ9+8PPIUczuTv2M+Rg+fPkUggMWsGsyKseX35Amr59tlyIdS\r\n         lixw=='
         },
         {
            key: 'arc-authentication-results',
            line:
               'ARC-Authentication-Results: i=1; mx.google.com;\r\n       dkim=pass header.i=@trailimage-com.20150623.gappssmtp.com header.s=20150623 header.b=Yw99Bkf4;\r\n       spf=neutral (google.com: 209.85.220.41 is neither permitted nor denied by best guess record for domain of other@trailimage.com) smtp.mailfrom=other@trailimage.com'
         },
         { key: 'return-path', line: 'Return-Path: <other@trailimage.com>' },
         {
            key: 'received',
            line:
               'Received: from mail-sor-f41.google.com (mail-sor-f41.google.com. [209.85.220.41])\r\n        by mx.google.com with SMTPS id 9-v6sor14832360ote.11.2018.09.20.13.01.26\r\n        for <self@trailimage.com>\r\n        (Google Transport Security);\r\n        Thu, 20 Sep 2018 13:01:26 -0700 (PDT)'
         },
         {
            key: 'received-spf',
            line:
               'Received-SPF: neutral (google.com: 209.85.220.41 is neither permitted nor denied by best guess record for domain of other@trailimage.com) client-ip=209.85.220.41;'
         },
         {
            key: 'authentication-results',
            line:
               'Authentication-Results: mx.google.com;\r\n       dkim=pass header.i=@trailimage-com.20150623.gappssmtp.com header.s=20150623 header.b=Yw99Bkf4;\r\n       spf=neutral (google.com: 209.85.220.41 is neither permitted nor denied by best guess record for domain of other@trailimage.com) smtp.mailfrom=other@trailimage.com'
         },
         {
            key: 'dkim-signature',
            line:
               'DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=trailimage-com.20150623.gappssmtp.com; s=20150623;\r\n        h=mime-version:references:in-reply-to:from:date:message-id:subject:to;\r\n        bh=OYytObiJhkaunELiOtYRN6xsfNlWhlFEAdKSe/oBZnM=;\r\n        b=Yw99Bkf4oFptsp//90h7Z4BmEke4k84j3lWkFvw95Q0pIG6WMBowcPecHKHLaHScNY\r\n         gXjb0N8iFJwrPK7KSIj4NksgbyWlOivcmaglrMkJ+t9+zYxs1BMwy44urmz/pvMcBsrf\r\n         YxJrdJw4aMtFWbJiVc4asVtpLL9XGNCc/Jv2bVbJBL1U9mvkD3Auq71KsmxiZFKNDTya\r\n         eFNDFjWHNiKlZJxmXbiaPVpzpYRb1Gr2DXIS4+Y6cPlVyzL3h49uNUyWJitOM0mU2+/C\r\n         A8i3g3KtdOs0OlWcpnAlLB2AT7Uv6uYxxDpLWjVtKBdRXlRP5zA5UiJQP661sBr8bYsq\r\n         5Nww=='
         },
         {
            key: 'x-google-dkim-signature',
            line:
               'X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=1e100.net; s=20161025;\r\n        h=x-gm-message-state:mime-version:references:in-reply-to:from:date\r\n         :message-id:subject:to;\r\n        bh=OYytObiJhkaunELiOtYRN6xsfNlWhlFEAdKSe/oBZnM=;\r\n        b=eLyI2qLt/0PCAZTx9ceV/w2JJ2DFyOOx3tBBQ/FEgBuW00CGabW5eOtrxTXB7XyPf2\r\n         fNdav89dygDoQLGJt+kgkCuNn0g/PWTtf1FF6LkOXWzV2pa9nrzH2dIdvZ8VSxXaObkJ\r\n         mKOHwKRls8Nq7yvNBxYi2Qx+zBU+xUMq5vuP135VWfk9AtJpvOwbr7U1Zg0tTkhZpxf4\r\n         XD3UAyPMNMc1bPnURRNyHycVR6WvJYZZVjK1EURrk0PTdpYpTBHDiTyd9xnkptAMT6EP\r\n         PlwmvZrNeBs/KYiigNt2e9k4Z3TjQZPrFmw/EyuXSX5CBqbRswN3Qp3s5koPMgedfHIh\r\n         VZDQ=='
         },
         {
            key: 'x-gm-message-state',
            line:
               'X-Gm-Message-State: APzg51BFhve0jxP/voigM+r/sKpZJ1wet+M5vGcpS70lVQtmDlT9S0PF\r\n\tFUlWxG8D1IU/17eCtoie9Yozz46C4wYmMccHh4BqqAjbsLqmOg=='
         },
         {
            key: 'x-google-smtp-source',
            line:
               'X-Google-Smtp-Source: ANB0VdZ20thLLWsapmWerXT0YJ3IjKnL0hvd+TJ4aDc9KzwSNiNwbV0TTdanroo0iyE7PqpkvXty40O40R3R61OyhSE='
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 2002:a9d:548:: with SMTP id 66-v6mr23710624otw.391.1537473685766;\r\n Thu, 20 Sep 2018 13:01:25 -0700 (PDT)'
         },
         { key: 'mime-version', line: 'MIME-Version: 1.0' },
         {
            key: 'references',
            line:
               'References: <CAAAYr2a_XH_Sm=E0xtigVxwOMuGytjHFvVbcFzm58gFiXd8JqQ@mail.gmail.com>\r\n <CAN2PqOgbWHByZ4rjvi=OV_FKoK6CmP3yai06E5JfPSJz3k0V0g@mail.gmail.com>'
         },
         {
            key: 'in-reply-to',
            line:
               'In-Reply-To: <CAN2PqOgbWHByZ4rjvi=OV_FKoK6CmP3yai06E5JfPSJz3k0V0g@mail.gmail.com>'
         },
         { key: 'from', line: 'From: Other Person <other@trailimage.com>' },
         { key: 'date', line: 'Date: Thu, 20 Sep 2018 14:01:14 -0600' },
         {
            key: 'message-id',
            line:
               'Message-ID: <CAAAYr2YZjuH5xtmPk4Hc0QdfV6WOxtFCGEdvMNw0YD0+twGchg@mail.gmail.com>'
         },
         { key: 'subject', line: 'Subject: Fwd: Brenna/ Choir' },
         { key: 'to', line: 'To: Self Person <self@trailimage.com>' },
         {
            key: 'content-type',
            line:
               'Content-Type: multipart/alternative; boundary="000000000000e49cc7057652fc29"'
         }
      ],
      html:
         '<div dir="ltr"><br clear="all"><div><div dir="ltr" class="gmail_signature" data-smartmail="gmail_signature"><div dir="ltr"><div><div dir="ltr"><div dir="ltr"><div dir="ltr"><div dir="ltr"><div>Choir info</div><div><span></span></div></div></div></div></div></div></div></div></div><br><br><div class="gmail_quote"><div dir="ltr">---------- Forwarded message ---------<br>From: <strong class="gmail_sendername" dir="auto">Ariel Thomas</strong> <span dir="ltr">&lt;<a href="mailto:ariel.thomas@boiseschools.org">ariel.thomas@boiseschools.org</a>&gt;</span><br>Date: Thu, Sep 20, 2018 at 12:55 PM<br>Subject: Re: Brenna/ Choir<br>To: Jessica Abbott &lt;<a href="mailto:other@trailimage.com">other@trailimage.com</a>&gt;<br></div><br><br><div dir="ltr">Sorry if that email didn&#39;t make it to you! The email I have in my system from the permission slip is <a href="mailto:school@trailimage.com" target="_blank">school@trailimage.com</a>; should I add this email to my distribution list?<div><br></div><div>Brenna&#39;s part comes on Tuesdays from 8:20-9. I open up the doors starting at 8:10/8:15 ish.</div><div><br></div><div>I&#39;ll include the other info in this email for you so you&#39;re all caught up!</div><div><br></div><div>The email from this morning:</div><div>\n\n<div class="m_-7777468689301298907m_5721275042451076754gmail-gE m_-7777468689301298907m_5721275042451076754gmail-iv m_-7777468689301298907m_5721275042451076754gmail-gt" style="padding:12px 0px 3px;font-size:12.8px;background-color:rgb(255,255,255);text-decoration-style:initial;text-decoration-color:initial"><table cellpadding="0" class="m_-7777468689301298907m_5721275042451076754gmail-cf m_-7777468689301298907m_5721275042451076754gmail-gJ" style="border-collapse:collapse;margin-top:0px;width:auto"><tbody><tr class="m_-7777468689301298907m_5721275042451076754gmail-acZ" style="height:16px"><td class="m_-7777468689301298907m_5721275042451076754gmail-gF m_-7777468689301298907m_5721275042451076754gmail-gK" style="font-family:arial,sans-serif;margin:0px;text-align:left;white-space:nowrap;padding-right:8px;vertical-align:top;width:1394px;padding-top:0px"><br></td><td class="m_-7777468689301298907m_5721275042451076754gmail-gH m_-7777468689301298907m_5721275042451076754gmail-bAk" style="font-family:arial,sans-serif;margin:0px;text-align:right;white-space:nowrap;vertical-align:top;color:rgb(34,34,34)"></td><td class="m_-7777468689301298907m_5721275042451076754gmail-gH" style="font-family:arial,sans-serif;margin:0px;text-align:right;white-space:nowrap;vertical-align:top;color:rgb(34,34,34)"></td><td class="m_-7777468689301298907m_5721275042451076754gmail-gH m_-7777468689301298907m_5721275042451076754gmail-acX m_-7777468689301298907m_5721275042451076754gmail-bAm" rowspan="2" style="font-family:arial,sans-serif;margin:0px;text-align:right;white-space:nowrap;vertical-align:top;color:rgb(34,34,34)"></td></tr></tbody></table></div><div id="m_-7777468689301298907m_5721275042451076754gmail-:lf" style="font-size:medium;background-color:rgb(255,255,255);text-decoration-style:initial;text-decoration-color:initial"><div class="m_-7777468689301298907m_5721275042451076754gmail-qQVYZb"></div><div class="m_-7777468689301298907m_5721275042451076754gmail-utdU2e"></div><div class="m_-7777468689301298907m_5721275042451076754gmail-btm"></div></div><div class="m_-7777468689301298907m_5721275042451076754gmail-" style="font-size:medium;background-color:rgb(255,255,255);text-decoration-style:initial;text-decoration-color:initial"><div class="m_-7777468689301298907m_5721275042451076754gmail-aHl"></div><div id="m_-7777468689301298907m_5721275042451076754gmail-:ro"></div><div id="m_-7777468689301298907m_5721275042451076754gmail-:14m" class="m_-7777468689301298907m_5721275042451076754gmail-ii m_-7777468689301298907m_5721275042451076754gmail-gt m_-7777468689301298907m_5721275042451076754gmail-adO" style="font-size:12.8px;direction:ltr;margin:5px 15px 0px 0px;padding-bottom:5px"><div id="m_-7777468689301298907m_5721275042451076754gmail-:1mr" class="m_-7777468689301298907m_5721275042451076754gmail-a3s m_-7777468689301298907m_5721275042451076754gmail-aXjCH m_-7777468689301298907m_5721275042451076754gmail-m165f7a99581baa57" style="overflow:hidden"><div dir="ltr"><div class="m_-7777468689301298907m_5721275042451076754gmail-adM"></div><blockquote style="margin:0px 0px 0px 0.8ex;border-left:1px solid rgb(204,204,204);padding-left:1ex" class="gmail_quote"><span style="font-size:12.8px;text-decoration-style:initial;text-decoration-color:initial;float:none;display:inline">Hello again, choir parents!</span><br>I would like to express how impressed I am with your students after only one week! I can tell they are a talented bunch and we are going to get a lot accomplished this year.<br>A few reminders:<ul><li style="margin-left:15px">Please have your student enter the building using the<span> </span><u>side doors closest to the 6th grade pod/music room.</u><span> </span>They are marked &quot;exit only&quot;, but are propped open on choir days so we don&#39;t disturb the office.</li></ul><ul><li style="margin-left:15px">I will be in my room to welcome choir students starting at 8:10; rehearsal starts at 8:20</li></ul><ul><li style="margin-left:15px">We had a couple kids miss their first rehearsal - and that&#39;s ok! Please make sure your student knows<span> </span><a href="https://docs.google.com/document/d/1imjm2jhPrUlxu-pW2gP-1-RW5dYg6W__qTaus-T1NuE/edit?usp=sharing" style="color:rgb(17,85,204)" target="_blank">which day they come to choir</a><span> </span>so we can get the ball rolling with our whole team.</li></ul><ul><li style="margin-left:15px">I would love parent support for events the choir will be participating in this year! If you haven&#39;t filled out the <a href="https://goo.gl/forms/mEaKOLuI6k16skSq1" style="color:rgb(17,85,204)" target="_blank">music parent volunteer form</a>, please take a look to see if there&#39;s something you would be interested in (<u>especially</u><span> </span>if you are a piano player - I am not!)</li></ul>As always, thank you for supporting your students interests and talents. We are going to have an awesome year!</blockquote><div style="font-size:12.8px;text-decoration-style:initial;text-decoration-color:initial"><div><br></div><div><br></div></div></div></div></div><div id="m_-7777468689301298907m_5721275042451076754gmail-:14m" class="m_-7777468689301298907m_5721275042451076754gmail-ii m_-7777468689301298907m_5721275042451076754gmail-gt m_-7777468689301298907m_5721275042451076754gmail-adO" style="font-size:12.8px;direction:ltr;margin:5px 0px 0px 15px;padding-bottom:5px"><div id="m_-7777468689301298907m_5721275042451076754gmail-:1mr" class="m_-7777468689301298907m_5721275042451076754gmail-a3s m_-7777468689301298907m_5721275042451076754gmail-aXjCH m_-7777468689301298907m_5721275042451076754gmail-m165f7a99581baa57" style="overflow:hidden"><div dir="ltr"><div style="font-size:12.8px;text-decoration-style:initial;text-decoration-color:initial"><div>Again, so sorry about the miscommunication. Let me know if you need any other information!</div></div></div></div></div></div>\n\n<br></div></div><div class="gmail_extra"><br><div class="gmail_quote">On Thu, Sep 20, 2018 at 12:48 PM, Other Person <span dir="ltr">&lt;<a href="mailto:other@trailimage.com" target="_blank">jessica@trailimage.com</a>&gt;</span> wrote:<br><blockquote class="gmail_quote" style="margin:0 0 0 .8ex;border-left:1px #ccc solid;padding-left:1ex"><div dir="ltr">Hi Ariel,<div><br></div><div>It sounds like an email went out regarding choir times for Tuesday that I didn&#39;t get. What time does Brenna need to be there? </div><span class="m_-7777468689301298907HOEnZb"><font color="#888888"><div><br></div><div><div><div dir="ltr" class="m_-7777468689301298907m_-6278597247588865148gmail_signature" data-smartmail="gmail_signature"><div dir="ltr"><div><div dir="ltr"><div dir="ltr"><div dir="ltr"><div dir="ltr"><div><font face="arial narrow, sans-serif" size="4">Other Person<a href="http://www.pinterest.com/abbottwellness" target="_blank"><br></a><br></font></div><div><span></span></div></div></div></div></div></div></div></div></div></div></font></span></div>\n</blockquote></div><br><br clear="all"><div><br></div>-- <br><div class="m_-7777468689301298907gmail_signature" data-smartmail="gmail_signature"><div dir="ltr">Ariel Thomas<div>Music Specialist</div><div>Riverside Elementary, Boise</div></div></div>\n</div>\n</div></div>\n',
      text:
         "Choir info\n\n\n---------- Forwarded message ---------\nFrom: Ariel Thomas <ariel.thomas@boiseschools.org>\nDate: Thu, Sep 20, 2018 at 12:55 PM\nSubject: Re: Brenna/ Choir\nTo: Other Person <other@trailimage.com>\n\n\nSorry if that email didn't make it to you! The email I have in my system\nfrom the permission slip is school@trailimage.com; should I add this email\nto my distribution list?\n\nBrenna's part comes on Tuesdays from 8:20-9. I open up the doors starting\nat 8:10/8:15 ish.\n\nI'll include the other info in this email for you so you're all caught up!\n\nThe email from this morning:\n\nHello again, choir parents!\n> I would like to express how impressed I am with your students after only\n> one week! I can tell they are a talented bunch and we are going to get a\n> lot accomplished this year.\n> A few reminders:\n>\n>    - Please have your student enter the building using the *side doors\n>    closest to the 6th grade pod/music room.* They are marked \"exit only\",\n>    but are propped open on choir days so we don't disturb the office.\n>\n>\n>    - I will be in my room to welcome choir students starting at 8:10;\n>    rehearsal starts at 8:20\n>\n>\n>    - We had a couple kids miss their first rehearsal - and that's ok!\n>    Please make sure your student knows which day they come to choir\n>    <https://docs.google.com/document/d/1imjm2jhPrUlxu-pW2gP-1-RW5dYg6W__qTaus-T1NuE/edit?usp=sharing>\n>     so we can get the ball rolling with our whole team.\n>\n>\n>    - I would love parent support for events the choir will be\n>    participating in this year! If you haven't filled out the music parent\n>    volunteer form <https://goo.gl/forms/mEaKOLuI6k16skSq1>, please take a\n>    look to see if there's something you would be interested in (\n>    *especially* if you are a piano player - I am not!)\n>\n> As always, thank you for supporting your students interests and talents.\n> We are going to have an awesome year!\n\n\n\nAgain, so sorry about the miscommunication. Let me know if you need any\nother information!\n\n\nOn Thu, Sep 20, 2018 at 12:48 PM, Other Person <other@trailimage.com>\nwrote:\n\n> Hi Ariel,\n>\n> It sounds like an email went out regarding choir times for Tuesday that I\n> didn't get. What time does Brenna need to be there?\n>\n> Other Person\n> <http://www.pinterest.com/abbottwellness>\n>\n\n\n\n-- \nAriel Thomas\nMusic Specialist\nRiverside Elementary, Boise\n",
      textAsHtml:
         '<p>Choir info</p><p>---------- Forwarded message ---------<br/>From: Ariel Thomas <a href="mailto:&lt;ariel.thomas@boiseschools.org">&lt;ariel.thomas@boiseschools.org</a>&gt;<br/>Date: Thu, Sep 20, 2018 at 12:55 PM<br/>Subject: Re: Brenna/ Choir<br/>To: Other Person <a href="mailto:&lt;other@trailimage.com">&lt;other@trailimage.com</a>&gt;</p><p>Sorry if that email didn&apos;t make it to you! The email I have in my system<br/>from the permission slip is <a href="mailto:school@trailimage.com">school@trailimage.com</a>; should I add this email<br/>to my distribution list?</p><p>Brenna&apos;s part comes on Tuesdays from 8:20-9. I open up the doors starting<br/>at 8:10/8:15 ish.</p><p>I&apos;ll include the other info in this email for you so you&apos;re all caught up!</p><p>The email from this morning:</p><p>Hello again, choir parents!<br/>&gt; I would like to express how impressed I am with your students after only<br/>&gt; one week! I can tell they are a talented bunch and we are going to get a<br/>&gt; lot accomplished this year.<br/>&gt; A few reminders:<br/>&gt;<br/>&gt;    - Please have your student enter the building using the *side doors<br/>&gt;    closest to the 6th grade pod/music room.* They are marked &quot;exit only&quot;,<br/>&gt;    but are propped open on choir days so we don&apos;t disturb the office.<br/>&gt;<br/>&gt;<br/>&gt;    - I will be in my room to welcome choir students starting at 8:10;<br/>&gt;    rehearsal starts at 8:20<br/>&gt;<br/>&gt;<br/>&gt;    - We had a couple kids miss their first rehearsal - and that&apos;s ok!<br/>&gt;    Please make sure your student knows which day they come to choir<br/>&gt;    &lt;<a href="https://docs.google.com/document/d/1imjm2jhPrUlxu-pW2gP-1-RW5dYg6W__qTaus-T1NuE/edit?usp=sharing&gt;">https://docs.google.com/document/d/1imjm2jhPrUlxu-pW2gP-1-RW5dYg6W__qTaus-T1NuE/edit?usp=sharing&gt;</a><br/>&gt;     so we can get the ball rolling with our whole team.<br/>&gt;<br/>&gt;<br/>&gt;    - I would love parent support for events the choir will be<br/>&gt;    participating in this year! If you haven&apos;t filled out the music parent<br/>&gt;    volunteer form &lt;<a href="https://goo.gl/forms/mEaKOLuI6k16skSq1&gt;">https://goo.gl/forms/mEaKOLuI6k16skSq1&gt;</a>, please take a<br/>&gt;    look to see if there&apos;s something you would be interested in (<br/>&gt;    *especially* if you are a piano player - I am not!)<br/>&gt;<br/>&gt; As always, thank you for supporting your students interests and talents.<br/>&gt; We are going to have an awesome year!</p><p>Again, so sorry about the miscommunication. Let me know if you need any<br/>other information!</p><p>On Thu, Sep 20, 2018 at 12:48 PM, Other Person <a href="mailto:&lt;other@trailimage.com">&lt;other@trailimage.com</a>&gt;<br/>wrote:</p><p>&gt; Hi Ariel,<br/>&gt;<br/>&gt; It sounds like an email went out regarding choir times for Tuesday that I<br/>&gt; didn&apos;t get. What time does Brenna need to be there?<br/>&gt;<br/>&gt; Other Person<br/>&gt; &lt;<a href="http://www.pinterest.com/abbottwellness&gt;">http://www.pinterest.com/abbottwellness&gt;</a><br/>&gt;</p><p>--<br/>Ariel Thomas<br/>Music Specialist<br/>Riverside Elementary, Boise</p>',
      subject: 'Fwd: Brenna/ Choir',
      references: [
         '<CAAAYr2a_XH_Sm=E0xtigVxwOMuGytjHFvVbcFzm58gFiXd8JqQ@mail.gmail.com>',
         '<CAN2PqOgbWHByZ4rjvi=OV_FKoK6CmP3yai06E5JfPSJz3k0V0g@mail.gmail.com>'
      ],
      date: '2018-09-20T20:01:14.000Z',
      to: {
         value: [{ address: 'self@trailimage.com', name: 'Self Person' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Self Person</span> &lt;<a href="mailto:self@trailimage.com" class="mp_address_email">self@trailimage.com</a>&gt;</span>',
         text: 'Self Person <self@trailimage.com>'
      },
      from: {
         value: [{ address: 'other@trailimage.com', name: 'Other Person' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Other Person</span> &lt;<a href="mailto:other@trailimage.com" class="mp_address_email">other@trailimage.com</a>&gt;</span>',
         text: 'Other Person <other@trailimage.com>'
      },
      messageId:
         '<CAAAYr2YZjuH5xtmPk4Hc0QdfV6WOxtFCGEdvMNw0YD0+twGchg@mail.gmail.com>',
      inReplyTo:
         '<CAN2PqOgbWHByZ4rjvi=OV_FKoK6CmP3yai06E5JfPSJz3k0V0g@mail.gmail.com>'
   },
   {
      attachments: [],
      headers: {},
      headerLines: [
         { key: 'x-gm-thrid', line: 'X-GM-THRID: 1520374143434640317' },
         { key: 'x-gmail-labels', line: 'X-Gmail-Labels: Chat,Family/Jessica' },
         {
            key: 'from',
            line: 'From: Jessica Wright-Abbott <other@trailimage.com>'
         },
         { key: 'mime-version', line: 'MIME-Version: 1.0' },
         { key: 'content-type', line: 'Content-Type: text/plain' }
      ],
      text: '🙌\n\n',
      textAsHtml: '<p>&#x1F64C;</p>',
      from: {
         value: [
            { address: 'other@trailimage.com', name: 'Jessica Wright-Abbott' }
         ],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Jessica Wright-Abbott</span> &lt;<a href="mailto:other@trailimage.com" class="mp_address_email">other@trailimage.com</a>&gt;</span>',
         text: 'Jessica Wright-Abbott <other@trailimage.com>'
      },
      html: false
   },
   {
      attachments: [],
      headers: {},
      headerLines: [
         { key: 'x-gm-thrid', line: 'X-GM-THRID: 1520374143434640317' },
         { key: 'x-gmail-labels', line: 'X-Gmail-Labels: Chat' },
         { key: 'from', line: 'From: Self Person <self@trailimage.com>' },
         { key: 'mime-version', line: 'MIME-Version: 1.0' },
         { key: 'content-type', line: 'Content-Type: text/plain' }
      ],
      text: 'we&#39;ll have to send kids away\n\n',
      textAsHtml: '<p>we&amp;#39;ll have to send kids away</p>',
      from: {
         value: [{ address: 'self@trailimage.com', name: 'Self Person' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Self Person</span> &lt;<a href="mailto:self@trailimage.com" class="mp_address_email">self@trailimage.com</a>&gt;</span>',
         text: 'Self Person <self@trailimage.com>'
      },
      html: false
   },
   {
      attachments: [],
      headers: {},
      headerLines: [
         { key: 'x-gm-thrid', line: 'X-GM-THRID: 1520374143434640317' },
         { key: 'x-gmail-labels', line: 'X-Gmail-Labels: Chat,Family/Jessica' },
         {
            key: 'from',
            line: 'From: Jessica Wright-Abbott <other@trailimage.com>'
         },
         { key: 'mime-version', line: 'MIME-Version: 1.0' },
         { key: 'content-type', line: 'Content-Type: text/plain' }
      ],
      text: 'We still need to break in these rooms....\n\n',
      textAsHtml: '<p>We still need to break in these rooms....</p>',
      from: {
         value: [
            { address: 'other@trailimage.com', name: 'Jessica Wright-Abbott' }
         ],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Jessica Wright-Abbott</span> &lt;<a href="mailto:other@trailimage.com" class="mp_address_email">other@trailimage.com</a>&gt;</span>',
         text: 'Jessica Wright-Abbott <other@trailimage.com>'
      },
      html: false
   },
   {
      attachments: [],
      headers: {},
      headerLines: [
         { key: 'x-gm-thrid', line: 'X-GM-THRID: 1600454980619016679' },
         {
            key: 'x-gmail-labels',
            line: 'X-Gmail-Labels: Inbox,Important,Family/Jessica'
         },
         { key: 'delivered-to', line: 'Delivered-To: self@trailimage.com' },
         {
            key: 'received',
            line:
               'Received: by 2002:ac8:7259:0:0:0:0:0 with SMTP id l25-v6csp4721589qtp;\r\n        Mon, 14 May 2018 12:40:16 -0700 (PDT)'
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 2002:a9d:3d37:: with SMTP id a52-v6mr4695108otc.91.1526326816520;\r\n        Mon, 14 May 2018 12:40:16 -0700 (PDT)'
         },
         {
            key: 'arc-seal',
            line:
               'ARC-Seal: i=1; a=rsa-sha256; t=1526326816; cv=none;\r\n        d=google.com; s=arc-20160816;\r\n        b=SExhb8wOYHQzi1XwaoM6Mzzk8oD+nmHGOyCztsUqaRZYfUxkOMvc0uU2uNGPH17Zcx\r\n         Q4zSzSvHsz2ttr6lTbBmvP/knoR1u169mJBNJB0fcT8l6Q3S2PVFNa3WvzTmRRHOU2gD\r\n         YMbwdCxLBmbfv6xu5jCUXkNG0BoQLsaeW9aa9yauXeMnfMAcavlFQsq81CJtR723Sfgz\r\n         bJU8zXKFe1EjgrYUOFd6+iN7eqQF49FlJ15My8hatbvNEcICXTRBq71jWodgNTGTrXpz\r\n         WUBe/pLLGZwQs1cWVG49TWGeDgxHdvkSaHwej6sWvz1QMRZmJ9A4ehmPxrG+WcUoJXAc\r\n         DpYg=='
         },
         {
            key: 'arc-message-signature',
            line:
               'ARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;\r\n        h=to:subject:message-id:date:from:references:in-reply-to:mime-version\r\n         :dkim-signature:arc-authentication-results;\r\n        bh=pH3cNcV3m1ZRkwwQ+7FG3+jwXuJhiyTRTNylRGyiXV8=;\r\n        b=XiaNhq8NEAOcgWBN2eoC5i0dC2pQaSaCR+/VcuqOU5AFAJ//EKASIPWTQGIlpEZ0Xn\r\n         krDviEKhOrrf/7x0h94StDfSFBYgzg3D+r5xitMpLgboWscCqqZqs28PfEGHEVjrGpXk\r\n         WzmdZ/JGQfB6MWsymCiFYPhzblMVbJMGMn1Xn2dKX+c+gdL0Hlm2g33wsJe5Kqon12r9\r\n         WawXUooiUWYHkOdsv5775U0Z3Y2vTe/Dp3XB7XHKZuXNR9EGLx2nISjQTR5lqiB3wuHN\r\n         qZskrXtMDOcUIwAiFwn4aXJRklgrBeylEPMwPMPea6A9X2Jm5BkSz8Vc2GtBjpX1g076\r\n         E9cg=='
         },
         {
            key: 'arc-authentication-results',
            line:
               'ARC-Authentication-Results: i=1; mx.google.com;\r\n       dkim=pass header.i=@trailimage-com.20150623.gappssmtp.com header.s=20150623 header.b=pGaYFewj;\r\n       spf=neutral (google.com: 209.85.220.41 is neither permitted nor denied by best guess record for domain of other@trailimage.com) smtp.mailfrom=other@trailimage.com'
         },
         { key: 'return-path', line: 'Return-Path: <other@trailimage.com>' },
         {
            key: 'received',
            line:
               'Received: from mail-sor-f41.google.com (mail-sor-f41.google.com. [209.85.220.41])\r\n        by mx.google.com with SMTPS id a20-v6sor7138503oth.32.2018.05.14.12.40.15\r\n        for <self@trailimage.com>\r\n        (Google Transport Security);\r\n        Mon, 14 May 2018 12:40:16 -0700 (PDT)'
         },
         {
            key: 'received-spf',
            line:
               'Received-SPF: neutral (google.com: 209.85.220.41 is neither permitted nor denied by best guess record for domain of other@trailimage.com) client-ip=209.85.220.41;'
         },
         {
            key: 'authentication-results',
            line:
               'Authentication-Results: mx.google.com;\r\n       dkim=pass header.i=@trailimage-com.20150623.gappssmtp.com header.s=20150623 header.b=pGaYFewj;\r\n       spf=neutral (google.com: 209.85.220.41 is neither permitted nor denied by best guess record for domain of other@trailimage.com) smtp.mailfrom=other@trailimage.com'
         },
         {
            key: 'dkim-signature',
            line:
               'DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=trailimage-com.20150623.gappssmtp.com; s=20150623;\r\n        h=mime-version:in-reply-to:references:from:date:message-id:subject:to;\r\n        bh=pH3cNcV3m1ZRkwwQ+7FG3+jwXuJhiyTRTNylRGyiXV8=;\r\n        b=pGaYFewjCq9lBXfuOZCC5T17G5cONzBh0jYxBARGIrtPJHhZeA/Hgg9DFjyw+g8Dxd\r\n         x16kgnQexKJ7C9x5STxoU7guj3hTqZuh6NtH7eLkYdAQjWyOpau7bVICzGRg4ExF6F16\r\n         xAxWB7syAqokGjC9lfRd0jylWDX6FfMoaoBMnpcy5tg6q6QGvYFdqyrr2xD6Owcj+9R4\r\n         gQcdYcNmBQ5I4jLG4qM2ok1zRbE59/G0qkLy+gNZRRZepEBeZ/EJ47Iqa6N1Y0SqunrS\r\n         J6q2c9pAdDLhkivtu8yYdH7XCDqtxwpTGweNHWiTNQfrhgOlxYc2vKjKbnr/+TCX04RM\r\n         VMNQ=='
         },
         {
            key: 'x-google-dkim-signature',
            line:
               'X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=1e100.net; s=20161025;\r\n        h=x-gm-message-state:mime-version:in-reply-to:references:from:date\r\n         :message-id:subject:to;\r\n        bh=pH3cNcV3m1ZRkwwQ+7FG3+jwXuJhiyTRTNylRGyiXV8=;\r\n        b=XsmMp+qzYthoSAn08R1MysAX4vFSClaQhhGOJOagMp7dEOg4eRJjwA7KDAbwYprq06\r\n         ZjbK3bCzHPGRd7kcxzeA0xD8y7Ds2R+qY6bH76HOFB/X8tjOt510XoXv+JaOcXKb5sGd\r\n         tQiYglPskfLhv9kHM8/oth+zeK+N8OUz748d2MZG3ano5OH8cOAVDMfBvUOQz3iWwmsS\r\n         +3Nn2ceXiKoRCYkyRE4XSZsllIGxfC8qRpbZskISC4KoPu8HZ1DH40J0WCHiCcZdfyV5\r\n         FTHa/pYHP1kKlWxMevCYd1KGRK8/+Ob55/6cByTAATbfosc2jEiOhzkgarCqFleXu0fz\r\n         n1gQ=='
         },
         {
            key: 'x-gm-message-state',
            line:
               'X-Gm-Message-State: ALKqPwflq4WtgVWwmMrDn5F8L8irQZFPVmFoOlD5EbyFucuAKuxUAdD3\r\n\tErSkdHNoTpWk+F83Syn+I4HRx5tSBw6OUrQ92qOoPGT3'
         },
         {
            key: 'x-google-smtp-source',
            line:
               'X-Google-Smtp-Source: AB8JxZr3GMAB/2AjqS9cnGLmKI/xqj2dSLAScXHVM4Di6yMLymGhDlNOBKTaOpO16nH1r2Awx0Dw886AKsljuRCZqHA='
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 2002:a9d:4494:: with SMTP id v20-v6mr7884111ote.278.1526326810530;\r\n Mon, 14 May 2018 12:40:10 -0700 (PDT)'
         },
         { key: 'mime-version', line: 'MIME-Version: 1.0' },
         {
            key: 'received',
            line:
               'Received: by 2002:a9d:26cf:0:0:0:0:0 with HTTP; Mon, 14 May 2018 12:40:10\r\n -0700 (PDT)'
         },
         {
            key: 'x-originating-ip',
            line: 'X-Originating-IP: [104.129.192.106]'
         },
         {
            key: 'in-reply-to',
            line:
               'In-Reply-To: <CACVcv_UYne-OBi1wmPbhsDU1k+m+8bBLdBUKgzAL7GjCDn0wHg@mail.gmail.com>'
         },
         {
            key: 'references',
            line:
               'References: <CACVcv_UYne-OBi1wmPbhsDU1k+m+8bBLdBUKgzAL7GjCDn0wHg@mail.gmail.com>'
         },
         { key: 'from', line: 'From: Other Person <other@trailimage.com>' },
         { key: 'date', line: 'Date: Mon, 14 May 2018 13:40:10 -0600' },
         {
            key: 'message-id',
            line:
               'Message-ID: <CAAAYr2aTkNmfcCsyDqSXGcD7VbC5H7nhH31n6i8t5kLyQpP3Lg@mail.gmail.com>'
         },
         {
            key: 'subject',
            line:
               'Subject: Fwd: Wagons Ho Volunteers - Respond if interested :)'
         },
         { key: 'to', line: 'To: Self Person <self@trailimage.com>' },
         {
            key: 'content-type',
            line:
               'Content-Type: multipart/alternative; boundary="0000000000005a6c5e056c2fa707"'
         }
      ],
      html:
         '<div dir="ltr"><br clear="all"><div><div class="gmail_signature" data-smartmail="gmail_signature"><div dir="ltr"><div><div dir="ltr"><div dir="ltr"><div dir="ltr"><div dir="ltr"><div><br></div><div><font face="arial narrow, sans-serif" size="4"><br></font></div><div><span></span></div></div></div></div></div></div></div></div></div>\n<br><div class="gmail_quote">---------- Forwarded message ----------<br>From: <b class="gmail_sendername">Holly Slyter</b> <span dir="ltr">&lt;<a href="mailto:holly.sombody@boise.org">holly.slyter@boiseschools.org</a>&gt;</span><br>Date: Mon, May 14, 2018 at 9:46 AM<br>Subject: Wagons Ho Volunteers - Respond if interested :)<br>To: <br><br><br><div dir="ltr"><div style="font-family:georgia,serif">Hello! We made it through Baker City, woo hoo!! Thank you to those of you that traveled all the way out there to help chaperone, or to those that said they&#39;d be willing to - I appreciate you!</div><div style="font-family:georgia,serif"><br></div><div style="font-family:georgia,serif"><b>Wagons Ho is this Wednesday, May 16th</b>! In the interest of not having any of you fall through the cracks, will you just respond with which time slot you&#39;d be able to help during (even if you&#39;ve already told me):  </div><div style="font-family:georgia,serif"><b>9:00 AM-12:30 PM</b></div><div style="font-family:georgia,serif"><b>12:30-3:30 PM</b></div><div style="font-family:georgia,serif"><b>or All Day (9:00-3:30)</b>. </div><div style="font-family:georgia,serif"><br></div><div style="font-family:georgia,serif">All day is preferred, but I understand you guys have lives outside of volunteering :) </div><div style="font-family:georgia,serif"><br></div><div style="font-family:georgia,serif">We should already have all the supplies we need, like buttons, cardboard and wood, so just make sure your child has good shoes, long pants to be near the fire, sunscreen and water for the warm weather! Sack lunches will be easiest since we&#39;re out in the field, but we do have the option of going into the cafeteria if they need a hot lunch. Remember, they are welcome to dress up like a pioneer! </div><div style="font-family:georgia,serif"><br></div><div style="font-family:georgia,serif">Additionally, due to Wagons Ho, our jog-a-thon is rescheduled to Tuesday, May 15th (tomorrow), which I know came up fast! The pledge sheets should have gone home last week but will come home today if it was forgotten :) </div><div style="font-family:georgia,serif"><br></div><div style="font-family:georgia,serif">Three weeks left, can you believe it?!</div><div style="font-family:georgia,serif"><br></div><div style="font-family:georgia,serif">Thank you,</div><div style="font-family:georgia,serif">Holly Slyter </div><span class="HOEnZb"><font color="#888888"><div><br></div>-- <br><div class="m_7516270234988373710gmail_signature" data-smartmail="gmail_signature"><div dir="ltr"><font face="georgia, serif" color="#741b47">Holly Slyter</font><div><font face="georgia, serif" color="#741b47">Fourth Grade Teacher</font></div><div><font face="georgia, serif" color="#741b47">Riverside Elementary</font></div></div></div>\n</font></span></div>\n</div><br></div>\n',
      text:
         "---------- Forwarded message ----------\nFrom: Holly Slyter <holly.sombody@boise.org>\nDate: Mon, May 14, 2018 at 9:46 AM\nSubject: Wagons Ho Volunteers - Respond if interested :)\nTo:\n\n\nHello! We made it through Baker City, woo hoo!! Thank you to those of you\nthat traveled all the way out there to help chaperone, or to those that\nsaid they'd be willing to - I appreciate you!\n\n*Wagons Ho is this Wednesday, May 16th*! In the interest of not having any\nof you fall through the cracks, will you just respond with which time slot\nyou'd be able to help during (even if you've already told me):\n*9:00 AM-12:30 PM*\n*12:30-3:30 PM*\n*or All Day (9:00-3:30)*.\n\nAll day is preferred, but I understand you guys have lives outside of\nvolunteering :)\n\nWe should already have all the supplies we need, like buttons, cardboard\nand wood, so just make sure your child has good shoes, long pants to be\nnear the fire, sunscreen and water for the warm weather! Sack lunches will\nbe easiest since we're out in the field, but we do have the option of going\ninto the cafeteria if they need a hot lunch. Remember, they are welcome to\ndress up like a pioneer!\n\nAdditionally, due to Wagons Ho, our jog-a-thon is rescheduled to Tuesday,\nMay 15th (tomorrow), which I know came up fast! The pledge sheets should\nhave gone home last week but will come home today if it was forgotten :)\n\nThree weeks left, can you believe it?!\n\nThank you,\nHolly Slyter\n\n-- \nHolly Slyter\nFourth Grade Teacher\nRiverside Elementary\n",
      textAsHtml:
         '<p>---------- Forwarded message ----------<br/>From: Holly Slyter <a href="mailto:&lt;holly.sombody@boise.org">&lt;holly.sombody@boise.org</a>&gt;<br/>Date: Mon, May 14, 2018 at 9:46 AM<br/>Subject: Wagons Ho Volunteers - Respond if interested :)<br/>To:</p><p>Hello! We made it through Baker City, woo hoo!! Thank you to those of you<br/>that traveled all the way out there to help chaperone, or to those that<br/>said they&apos;d be willing to - I appreciate you!</p><p>*Wagons Ho is this Wednesday, May 16th*! In the interest of not having any<br/>of you fall through the cracks, will you just respond with which time slot<br/>you&apos;d be able to help during (even if you&apos;ve already told me):<br/>*9:00 AM-12:30 PM*<br/>*12:30-3:30 PM*<br/>*or All Day (9:00-3:30)*.</p><p>All day is preferred, but I understand you guys have lives outside of<br/>volunteering :)</p><p>We should already have all the supplies we need, like buttons, cardboard<br/>and wood, so just make sure your child has good shoes, long pants to be<br/>near the fire, sunscreen and water for the warm weather! Sack lunches will<br/>be easiest since we&apos;re out in the field, but we do have the option of going<br/>into the cafeteria if they need a hot lunch. Remember, they are welcome to<br/>dress up like a pioneer!</p><p>Additionally, due to Wagons Ho, our jog-a-thon is rescheduled to Tuesday,<br/>May 15th (tomorrow), which I know came up fast! The pledge sheets should<br/>have gone home last week but will come home today if it was forgotten :)</p><p>Three weeks left, can you believe it?!</p><p>Thank you,<br/>Holly Slyter</p><p>--<br/>Holly Slyter<br/>Fourth Grade Teacher<br/>Riverside Elementary</p>',
      subject: 'Fwd: Wagons Ho Volunteers - Respond if interested :)',
      references:
         '<CACVcv_UYne-OBi1wmPbhsDU1k+m+8bBLdBUKgzAL7GjCDn0wHg@mail.gmail.com>',
      date: '2018-05-14T19:40:10.000Z',
      to: {
         value: [{ address: 'self@trailimage.com', name: 'Self Person' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Self Person</span> &lt;<a href="mailto:self@trailimage.com" class="mp_address_email">self@trailimage.com</a>&gt;</span>',
         text: 'Self Person <self@trailimage.com>'
      },
      from: {
         value: [{ address: 'other@trailimage.com', name: 'Other Person' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Other Person</span> &lt;<a href="mailto:other@trailimage.com" class="mp_address_email">other@trailimage.com</a>&gt;</span>',
         text: 'Other Person <other@trailimage.com>'
      },
      messageId:
         '<CAAAYr2aTkNmfcCsyDqSXGcD7VbC5H7nhH31n6i8t5kLyQpP3Lg@mail.gmail.com>',
      inReplyTo:
         '<CACVcv_UYne-OBi1wmPbhsDU1k+m+8bBLdBUKgzAL7GjCDn0wHg@mail.gmail.com>'
   },
   {
      attachments: [],
      headers: {},
      headerLines: [
         { key: 'x-gm-thrid', line: 'X-GM-THRID: 1600454980619016679' },
         { key: 'x-gmail-labels', line: 'X-Gmail-Labels: Inbox,Important' },
         { key: 'delivered-to', line: 'Delivered-To: self@trailimage.com' },
         {
            key: 'received',
            line:
               'Received: by 2002:ac8:7259:0:0:0:0:0 with SMTP id l25-v6csp4484913qtp;\r\n        Mon, 14 May 2018 08:46:49 -0700 (PDT)'
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 2002:a37:81c2:: with SMTP id c185-v6mr8785296qkd.266.1526312809845;\r\n        Mon, 14 May 2018 08:46:49 -0700 (PDT)'
         },
         {
            key: 'arc-seal',
            line:
               'ARC-Seal: i=3; a=rsa-sha256; t=1526312809; cv=pass;\r\n        d=google.com; s=arc-20160816;\r\n        b=OZdn4RJNSttQGvo1dXBjNBK+H4d5KzhA5rXdVp9lM0LHYCFIKpHDfA1lbbp9rh+AUr\r\n         mSHxMy4FVarzjU9MPOfag2jZ8CBbgMHgIAaslnRGfZ9Ynk/RV23mg6o1SZsPA9XvjIyC\r\n         p0JurAy3FjLgH48+AZRjfbSdoAydQrcXtFBIreiaYWS9cbNrCeWiV1DYxG85fK0BQHu/\r\n         JLKyjra1fFcTuQ/Nez3+0uaB4Umh4XllQdrp8z7TmR3zU2SFWvxaKpakFif6B8M3tM5T\r\n         Mhnqizjw+CIGrI5+8Y7rKh3r9fmvWz60g5jVqjEefccKVyreY3n40LOLhjCjkSXtrUeo\r\n         4n0g=='
         },
         {
            key: 'arc-message-signature',
            line:
               'ARC-Message-Signature: i=3; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;\r\n        h=list-help:list-id:mailing-list:precedence:to:subject:message-id\r\n         :date:from:mime-version:arc-authentication-results\r\n         :arc-message-signature:dkim-signature:arc-authentication-results\r\n         :arc-message-signature:arc-authentication-results;\r\n        bh=evIpDrT3JHxl/x0ouHWaoFgayYX6k93wWjMS5Wzoykc=;\r\n        b=B80yC3NRsmTe8wmEFb3wAnH7PVujo9B7xb3ADmrl1qDSFl/Adufbm4PYEFFdicp9yn\r\n         YMTcnO3dk2a5IKCW65OyL8o5ygcyEgi+zc/eUeReD0Su0E+W55bnzojsOeTBYczkvoW+\r\n         cwuSdrdDBiqZVCDzh6fyAnEFjO9CfWJ/xwQsPM1WFbH4bKgUDCJkIL1EYfakxzddDfNJ\r\n         h6CylfNQUmUQ9t6dGjgNYNiv3V3l+VanVx4P+ZHCJwtfjmujm5P5/iXc8SAgl1i9P399\r\n         POBOR4Yop7+34I+XepZO8EgjmtOEUBQW3qHfFF7cSP/dS8LZ21N28E6wcQRcrjRsxcpl\r\n         goYQ=='
         },
         {
            key: 'arc-authentication-results',
            line:
               'ARC-Authentication-Results: i=3; mx.google.com;\r\n       dkim=pass header.i=@trailimage-com.20150623.gappssmtp.com header.s=20150623 header.b=c4vPirEh;\r\n       arc=pass (i=2 spf=pass spfdomain=boiseschools.org);\r\n       spf=neutral (google.com: 209.85.220.69 is neither permitted nor denied by best guess record for domain of school+bncbcoj35oy7elrb2o643lqkgqenb5q7xq@trailimage.com) smtp.mailfrom=school+bncBCOJ35OY7ELRB2O643LQKGQENB5Q7XQ@trailimage.com'
         },
         {
            key: 'return-path',
            line:
               'Return-Path: <school+bncBCOJ35OY7ELRB2O643LQKGQENB5Q7XQ@trailimage.com>'
         },
         {
            key: 'received',
            line:
               'Received: from mail-sor-f69.google.com (mail-sor-f69.google.com. [209.85.220.69])\r\n        by mx.google.com with SMTPS id j2-v6sor7803116qvi.1.2018.05.14.08.46.49\r\n        for <self@trailimage.com>\r\n        (Google Transport Security);\r\n        Mon, 14 May 2018 08:46:49 -0700 (PDT)'
         },
         {
            key: 'received-spf',
            line:
               'Received-SPF: neutral (google.com: 209.85.220.69 is neither permitted nor denied by best guess record for domain of school+bncbcoj35oy7elrb2o643lqkgqenb5q7xq@trailimage.com) client-ip=209.85.220.69;'
         },
         {
            key: 'authentication-results',
            line:
               'Authentication-Results: mx.google.com;\r\n       dkim=pass header.i=@trailimage-com.20150623.gappssmtp.com header.s=20150623 header.b=c4vPirEh;\r\n       arc=pass (i=2 spf=pass spfdomain=boiseschools.org);\r\n       spf=neutral (google.com: 209.85.220.69 is neither permitted nor denied by best guess record for domain of school+bncbcoj35oy7elrb2o643lqkgqenb5q7xq@trailimage.com) smtp.mailfrom=school+bncBCOJ35OY7ELRB2O643LQKGQENB5Q7XQ@trailimage.com'
         },
         {
            key: 'arc-seal',
            line:
               'ARC-Seal: i=2; a=rsa-sha256; t=1526312809; cv=pass;\r\n        d=google.com; s=arc-20160816;\r\n        b=StCtsJnxn6d4XqYjLw/bRN8Jzxf1iqGyIfPVxHPAeaZ/ot+i6GVXODzJ6XrMz6xEI1\r\n         /kQK0/SWMBh0fXcdSO4w11BYzZlN6nslwmY8AN4Z3dp5BEl09X0meKKqqyXX7tnxNslV\r\n         UMLcS7vqEJYZ2Hz68PLsAjy01Ray3SJKel1ZjcC1afimpp4pDB3RMsNr2BjUDqvOsfVl\r\n         Scixg+lRobwTYImpEILwGYU3fVgGWVymOvzM/s+2NTcRufTmswPjjCP6nLr4ByKs8rFt\r\n         NzMc7oiaA4cL01lR3fGEgtXw+8OkGuvSd8oJFwiKAJU3u4f56s2O5g1ANmcvxhLBPP5m\r\n         Lobw=='
         },
         {
            key: 'arc-message-signature',
            line:
               'ARC-Message-Signature: i=2; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;\r\n        h=list-help:list-id:mailing-list:precedence:to:subject:message-id\r\n         :date:from:mime-version:arc-authentication-results\r\n         :arc-message-signature:dkim-signature:arc-authentication-results;\r\n        bh=evIpDrT3JHxl/x0ouHWaoFgayYX6k93wWjMS5Wzoykc=;\r\n        b=iHw8gN5jLHHaGBW5rOjjBUBTm+mUq9gFHC/6mt+sJwadpB3lQlPiNpRpkHwV3jTTIW\r\n         P23UngMWm62adB1EVtYg6KshJtNobUFcxfG2fivxCBU2y6LdZJDIRefE65xe4fRNQWPt\r\n         YzVZFf+MlmzRHJje0Gwzvq+++QX+g1LPpdF8YuoqgIKwc6EhlQXNuJV9UCnOnZ2Nakr/\r\n         E0/+gqCNv0Vk69tTw7n4fyI8GxQktNKsdwU9hxDxhR0dUtZnZxMlU1BEu0B/bDwji+Ro\r\n         9TLalnMQVUVCu2vrZ/UBIGH6VPlkQEHOruWk4W2LSBTnjxcbwMn5GHU8p/vxj72Qcsxq\r\n         J8Xg=='
         },
         {
            key: 'arc-authentication-results',
            line:
               'ARC-Authentication-Results: i=2; mx.google.com;\r\n       dkim=fail header.i=@boiseschools.org header.s=google header.b=Qo4rfPKq;\r\n       spf=pass (google.com: domain of holly.sombody@boise.org designates 209.85.220.65 as permitted sender) smtp.mailfrom=holly.sombody@boise.org'
         },
         {
            key: 'dkim-signature',
            line:
               'DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=trailimage-com.20150623.gappssmtp.com; s=20150623;\r\n        h=mime-version:from:date:message-id:subject:to:x-original-sender\r\n         :x-original-authentication-results:precedence:mailing-list:list-id\r\n         :list-help;\r\n        bh=evIpDrT3JHxl/x0ouHWaoFgayYX6k93wWjMS5Wzoykc=;\r\n        b=c4vPirEht7TFg0luUaYFv/1B7pWtGQpzydMTdvwOdW4BLfR8AhojYzQGbpxXT6+/52\r\n         JH2jW0+TFRVkEn345hDA8HFRwyAVBaxGIT0voFPd4MlNaJ3kHJ+Ym6rX/0Qg533dLJt4\r\n         FGcsz1IQUhBE1ETqx6PwqTco2VI0oEfkXj53cubsfURhG0N1z9q7I+/5ZXDJ7/Ys7+A5\r\n         aao8weBvbxoBHiJMhhnw0XocndQLN2ZJirnKuVZTUtYUd3fwG8HFehokrffqaXiEPoHa\r\n         d7rD/0vHBfOx3wx03l8WFrnp/7wHQrNjo2E3mWumovmN+BLRU5N5raS3d3uY49gLVoOx\r\n         0Rkw=='
         },
         {
            key: 'x-google-dkim-signature',
            line:
               'X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=1e100.net; s=20161025;\r\n        h=x-gm-message-state:mime-version:from:date:message-id:subject:to\r\n         :x-original-sender:x-original-authentication-results:precedence\r\n         :mailing-list:list-id:x-spam-checked-in-group:list-help;\r\n        bh=evIpDrT3JHxl/x0ouHWaoFgayYX6k93wWjMS5Wzoykc=;\r\n        b=T+WgPMprwUXPG7HJ9EiZJLie87Xe0ulPSxPe0LN33V0VKVSB9RsccWnCz27hprvWds\r\n         y1dqWZoGpbmJchxMh/QmueNsS//be8QTT2VPZ+j0EPaSCVVo8usqAHxy3kFddUKLbMfA\r\n         lUnmiLwvLTUqhRgceyiY3BVbmce3xY5L68fWp8iANFLfi3rjnw1/r/2tfhn6SRAg2eeQ\r\n         /M0jpvl/WMGW594H1b+D7M6OhCi1vH5oXRB6bRjJ+u6PYWDpp385eE1rvCn5zGLQXUXO\r\n         cTN1vz/gseOSWvIlYKiEQEAXE0VUZHQsH/wPqgHfrRH+Lly42f2urYUlleHKNF+BH1BI\r\n         Wwhg=='
         },
         {
            key: 'x-gm-message-state',
            line:
               'X-Gm-Message-State: ALKqPweFyzTbKgeVa10RYBvS1fuyUXDBzNW2747JoASuHFj4DgVOhf2p\r\n\tFzYcyaW0mtI6yrTEdMMGp5xrue6p'
         },
         {
            key: 'x-google-smtp-source',
            line:
               'X-Google-Smtp-Source: AB8JxZojbRUzPXJnbYvCF7XCbRspPecDDdKgtOma+MVlbFL+AtKPaNiYhqg51nXTw3ktOb0/cZ30Tg=='
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 2002:a0c:b586:: with SMTP id g6-v6mr17137523qve.61.1526312809635;\r\n        Mon, 14 May 2018 08:46:49 -0700 (PDT)'
         },
         { key: 'x-beenthere', line: 'X-BeenThere: school@trailimage.com' },
         {
            key: 'received',
            line:
               'Received: by 2002:ac8:13c8:: with SMTP id i8-v6ls7446746qtj.2.gmail; Mon, 14\r\n May 2018 08:46:49 -0700 (PDT)'
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 2002:aed:3cf0:: with SMTP id e45-v6mr9663105qtf.276.1526312809388;\r\n        Mon, 14 May 2018 08:46:49 -0700 (PDT)'
         },
         {
            key: 'arc-seal',
            line:
               'ARC-Seal: i=1; a=rsa-sha256; t=1526312809; cv=none;\r\n        d=google.com; s=arc-20160816;\r\n        b=kB6VnNLRHkKEOmVoMAcfJm27RXtbw02B23gbeV9QuUhMWyMEJ2s9UXA9dTLQXbM0Ed\r\n         VNlLQBUBscr6dZl5DZdNhWhvmEkq+/VYtBd4ua5DrZEPZmlf2oA/Dl+EOtMw1hgmP9Kq\r\n         BHHicw6t5tbRRN5DjI5chYSsN+YaK5JCRE5y4lCOsVj+J1aZKAyELtWpr9BpFdqIaHcM\r\n         C8G2POSD/N0fSYBnfVMYFN41pwnfsKH1jIzYqogyayb5PxFP8JqQKIkwq/6yiBKgyd4t\r\n         EdM/qj8LcyhmROX4yKoYwq0ohk83I2+wDdhpuDLbCxv8A/hV9RfXNIBZ5vlcR7nNf7Os\r\n         tNAw=='
         },
         {
            key: 'arc-message-signature',
            line:
               'ARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;\r\n        h=to:subject:message-id:date:from:mime-version:dkim-signature\r\n         :arc-authentication-results;\r\n        bh=evIpDrT3JHxl/x0ouHWaoFgayYX6k93wWjMS5Wzoykc=;\r\n        b=LZqXwyuu70BU8SNgA+c9xZR0Ghy0LkPZ3nFrnWOk5I5uvzxX5FLJwX/LuV17ytwHQW\r\n         r7Kv2v/Kxk9thjY5xBxaqOxAKJQhuKX2RmJsA34mpmc/v+s9LJtLr6tE4EQKGupUJpAO\r\n         FIgz/x6/HDbUd5Ura5/KPJ55ASFMz62mi/GsaWStM17m9M76Mmyboxs8+1twx/dL7mox\r\n         ohh7BhzRog8RmD8le4PijUwz4rIJblwWdkZ5HTOxuB+mXzjyjXB//SJ13ElomXCLPM8i\r\n         A7cVPKV0VLcJGFAcLriJDPztrs0fS8Z1vi75Q8NS23y+t+zet2jfPFhG9u86tPSX8DV/\r\n         m4Fw=='
         },
         {
            key: 'arc-authentication-results',
            line:
               'ARC-Authentication-Results: i=1; mx.google.com;\r\n       dkim=fail header.i=@boiseschools.org header.s=google header.b=Qo4rfPKq;\r\n       spf=pass (google.com: domain of holly.sombody@boise.org designates 209.85.220.65 as permitted sender) smtp.mailfrom=holly.sombody@boise.org'
         },
         {
            key: 'received',
            line:
               'Received: from mail-sor-f65.google.com (mail-sor-f65.google.com. [209.85.220.65])\r\n        by mx.google.com with SMTPS id f4-v6sor7795897qvi.118.2018.05.14.08.46.49\r\n        for <school@trailimage.com>\r\n        (Google Transport Security);\r\n        Mon, 14 May 2018 08:46:49 -0700 (PDT)'
         },
         {
            key: 'received-spf',
            line:
               'Received-SPF: pass (google.com: domain of holly.sombody@boise.org designates 209.85.220.65 as permitted sender) client-ip=209.85.220.65;'
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 2002:a0c:bc90:: with SMTP id l16-v6mr9188677qvg.178.1526312808972;\r\n Mon, 14 May 2018 08:46:48 -0700 (PDT)'
         },
         { key: 'mime-version', line: 'MIME-Version: 1.0' },
         {
            key: 'received',
            line:
               'Received: by 10.200.103.11 with HTTP; Mon, 14 May 2018 08:46:48 -0700 (PDT)'
         },
         { key: 'from', line: 'From: Holly Slyter <holly.sombody@boise.org>' },
         { key: 'date', line: 'Date: Mon, 14 May 2018 09:46:48 -0600' },
         {
            key: 'message-id',
            line:
               'Message-ID: <CACVcv_UYne-OBi1wmPbhsDU1k+m+8bBLdBUKgzAL7GjCDn0wHg@mail.gmail.com>'
         },
         {
            key: 'subject',
            line: 'Subject: Wagons Ho Volunteers - Respond if interested :)'
         },
         { key: 'to', line: 'To: undisclosed-recipients:;' },
         {
            key: 'content-type',
            line:
               'Content-Type: multipart/alternative; boundary="000000000000cba08c056c2c6467"'
         },
         { key: 'bcc', line: 'Bcc: school@trailimage.com' },
         {
            key: 'x-original-sender',
            line: 'X-Original-Sender: holly.sombody@boise.org'
         },
         {
            key: 'x-original-authentication-results',
            line:
               'X-Original-Authentication-Results: mx.google.com;       dkim=fail\r\n header.i=@boiseschools.org header.s=google header.b=Qo4rfPKq;       spf=pass\r\n (google.com: domain of holly.sombody@boise.org designates 209.85.220.65\r\n as permitted sender) smtp.mailfrom=holly.sombody@boise.org'
         },
         { key: 'precedence', line: 'Precedence: list' },
         {
            key: 'mailing-list',
            line:
               'Mailing-list: list school@trailimage.com; contact school+owners@trailimage.com'
         },
         { key: 'list-id', line: 'List-ID: <school.trailimage.com>' },
         {
            key: 'x-spam-checked-in-group',
            line: 'X-Spam-Checked-In-Group: school@trailimage.com'
         },
         { key: 'x-google-group-id', line: 'X-Google-Group-Id: 643934133648' },
         {
            key: 'list-help',
            line:
               'List-Help: <https://support.google.com/a/trailimage.com/bin/topic.py?topic=25838>,\r\n <mailto:school+help@trailimage.com>'
         }
      ],
      html:
         '<div dir="ltr"><div class="gmail_default" style="font-family:georgia,serif">Hello! We made it through Baker City, woo hoo!! Thank you to those of you that traveled all the way out there to help chaperone, or to those that said they&#39;d be willing to - I appreciate you!</div><div class="gmail_default" style="font-family:georgia,serif"><br></div><div class="gmail_default" style="font-family:georgia,serif"><b>Wagons Ho is this Wednesday, May 16th</b>! In the interest of not having any of you fall through the cracks, will you just respond with which time slot you&#39;d be able to help during (even if you&#39;ve already told me):  </div><div class="gmail_default" style="font-family:georgia,serif"><b>9:00 AM-12:30 PM</b></div><div class="gmail_default" style="font-family:georgia,serif"><b>12:30-3:30 PM</b></div><div class="gmail_default" style="font-family:georgia,serif"><b>or All Day (9:00-3:30)</b>. </div><div class="gmail_default" style="font-family:georgia,serif"><br></div><div class="gmail_default" style="font-family:georgia,serif">All day is preferred, but I understand you guys have lives outside of volunteering :) </div><div class="gmail_default" style="font-family:georgia,serif"><br></div><div class="gmail_default" style="font-family:georgia,serif">We should already have all the supplies we need, like buttons, cardboard and wood, so just make sure your child has good shoes, long pants to be near the fire, sunscreen and water for the warm weather! Sack lunches will be easiest since we&#39;re out in the field, but we do have the option of going into the cafeteria if they need a hot lunch. Remember, they are welcome to dress up like a pioneer! </div><div class="gmail_default" style="font-family:georgia,serif"><br></div><div class="gmail_default" style="font-family:georgia,serif">Additionally, due to Wagons Ho, our jog-a-thon is rescheduled to Tuesday, May 15th (tomorrow), which I know came up fast! The pledge sheets should have gone home last week but will come home today if it was forgotten :) </div><div class="gmail_default" style="font-family:georgia,serif"><br></div><div class="gmail_default" style="font-family:georgia,serif">Three weeks left, can you believe it?!</div><div class="gmail_default" style="font-family:georgia,serif"><br></div><div class="gmail_default" style="font-family:georgia,serif">Thank you,</div><div class="gmail_default" style="font-family:georgia,serif">Holly Slyter </div><div><br></div>-- <br><div class="gmail_signature" data-smartmail="gmail_signature"><div dir="ltr"><font face="georgia, serif" color="#741b47">Holly Slyter</font><div><font face="georgia, serif" color="#741b47">Fourth Grade Teacher</font></div><div><font face="georgia, serif" color="#741b47">Riverside Elementary</font></div></div></div>\n</div>\n',
      text:
         "Hello! We made it through Baker City, woo hoo!! Thank you to those of you\nthat traveled all the way out there to help chaperone, or to those that\nsaid they'd be willing to - I appreciate you!\n\n*Wagons Ho is this Wednesday, May 16th*! In the interest of not having any\nof you fall through the cracks, will you just respond with which time slot\nyou'd be able to help during (even if you've already told me):\n*9:00 AM-12:30 PM*\n*12:30-3:30 PM*\n*or All Day (9:00-3:30)*.\n\nAll day is preferred, but I understand you guys have lives outside of\nvolunteering :)\n\nWe should already have all the supplies we need, like buttons, cardboard\nand wood, so just make sure your child has good shoes, long pants to be\nnear the fire, sunscreen and water for the warm weather! Sack lunches will\nbe easiest since we're out in the field, but we do have the option of going\ninto the cafeteria if they need a hot lunch. Remember, they are welcome to\ndress up like a pioneer!\n\nAdditionally, due to Wagons Ho, our jog-a-thon is rescheduled to Tuesday,\nMay 15th (tomorrow), which I know came up fast! The pledge sheets should\nhave gone home last week but will come home today if it was forgotten :)\n\nThree weeks left, can you believe it?!\n\nThank you,\nHolly Slyter\n\n-- \nHolly Slyter\nFourth Grade Teacher\nRiverside Elementary\n",
      textAsHtml:
         '<p>Hello! We made it through Baker City, woo hoo!! Thank you to those of you<br/>that traveled all the way out there to help chaperone, or to those that<br/>said they&apos;d be willing to - I appreciate you!</p><p>*Wagons Ho is this Wednesday, May 16th*! In the interest of not having any<br/>of you fall through the cracks, will you just respond with which time slot<br/>you&apos;d be able to help during (even if you&apos;ve already told me):<br/>*9:00 AM-12:30 PM*<br/>*12:30-3:30 PM*<br/>*or All Day (9:00-3:30)*.</p><p>All day is preferred, but I understand you guys have lives outside of<br/>volunteering :)</p><p>We should already have all the supplies we need, like buttons, cardboard<br/>and wood, so just make sure your child has good shoes, long pants to be<br/>near the fire, sunscreen and water for the warm weather! Sack lunches will<br/>be easiest since we&apos;re out in the field, but we do have the option of going<br/>into the cafeteria if they need a hot lunch. Remember, they are welcome to<br/>dress up like a pioneer!</p><p>Additionally, due to Wagons Ho, our jog-a-thon is rescheduled to Tuesday,<br/>May 15th (tomorrow), which I know came up fast! The pledge sheets should<br/>have gone home last week but will come home today if it was forgotten :)</p><p>Three weeks left, can you believe it?!</p><p>Thank you,<br/>Holly Slyter</p><p>--<br/>Holly Slyter<br/>Fourth Grade Teacher<br/>Riverside Elementary</p>',
      subject: 'Wagons Ho Volunteers - Respond if interested :)',
      date: '2018-05-14T15:46:48.000Z',
      to: {
         value: [{ name: 'undisclosed-recipients', group: [] }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">undisclosed-recipients: </span>;</span>',
         text: 'undisclosed-recipients: ;'
      },
      from: {
         value: [{ address: 'holly.sombody@boise.org', name: 'Holly Slyter' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Holly Slyter</span> &lt;<a href="mailto:holly.sombody@boise.org" class="mp_address_email">holly.sombody@boise.org</a>&gt;</span>',
         text: 'Holly Slyter <holly.sombody@boise.org>'
      },
      bcc: {
         value: [{ address: 'school@trailimage.com', name: '' }],
         html:
            '<span class="mp_address_group"><a href="mailto:school@trailimage.com" class="mp_address_email">school@trailimage.com</a></span>',
         text: 'school@trailimage.com'
      },
      messageId:
         '<CACVcv_UYne-OBi1wmPbhsDU1k+m+8bBLdBUKgzAL7GjCDn0wHg@mail.gmail.com>'
   },
   {
      attachments: [],
      headers: {},
      headerLines: [
         { key: 'x-gm-thrid', line: 'X-GM-THRID: 1564515841342733874' },
         {
            key: 'x-gmail-labels',
            line: 'X-Gmail-Labels: Inbox,Important,Family/Jessica'
         },
         { key: 'delivered-to', line: 'Delivered-To: self@trailimage.com' },
         {
            key: 'received',
            line:
               'Received: by 10.28.206.4 with SMTP id e4csp492860wmg;\r\n        Wed, 12 Apr 2017 16:09:53 -0700 (PDT)'
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 10.157.17.50 with SMTP id g47mr68879ote.259.1492038593627;\r\n        Wed, 12 Apr 2017 16:09:53 -0700 (PDT)'
         },
         { key: 'return-path', line: 'Return-Path: <other@trailimage.com>' },
         {
            key: 'received',
            line:
               'Received: from mail-oi0-x232.google.com (mail-oi0-x232.google.com. [2607:f8b0:4003:c06::232])\r\n        by mx.google.com with ESMTPS id 1si1136227otp.115.2017.04.12.16.09.53\r\n        for <self@trailimage.com>\r\n        (version=TLS1_2 cipher=ECDHE-RSA-AES128-GCM-SHA256 bits=128/128);\r\n        Wed, 12 Apr 2017 16:09:53 -0700 (PDT)'
         },
         {
            key: 'received-spf',
            line:
               'Received-SPF: neutral (google.com: 2607:f8b0:4003:c06::232 is neither permitted nor denied by best guess record for domain of other@trailimage.com) client-ip=2607:f8b0:4003:c06::232;'
         },
         {
            key: 'authentication-results',
            line:
               'Authentication-Results: mx.google.com;\r\n       dkim=pass header.i=@trailimage-com.20150623.gappssmtp.com;\r\n       spf=neutral (google.com: 2607:f8b0:4003:c06::232 is neither permitted nor denied by best guess record for domain of other@trailimage.com) smtp.mailfrom=other@trailimage.com'
         },
         {
            key: 'received',
            line:
               'Received: by mail-oi0-x232.google.com with SMTP id g204so48941427oib.1\r\n        for <self@trailimage.com>; Wed, 12 Apr 2017 16:09:53 -0700 (PDT)'
         },
         {
            key: 'dkim-signature',
            line:
               'DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=trailimage-com.20150623.gappssmtp.com; s=20150623;\r\n        h=mime-version:in-reply-to:references:from:date:message-id:subject:to;\r\n        bh=ZU4FAVzW1/sVCE8dx+tfpCZEQj2zL0Bd/+ESEgc9b9c=;\r\n        b=jx8zXGp/VyPBExKjC/bzuGevKPFuILQD8C7oTtNc9We5fslQbezYpExXh2ss3FhWcf\r\n         dReHWMqQpGDfT6cAeTxurrr0rynRlWGOdeMG0QoQBaRjLe4fUGmbs/K4/5jnn/vuMWKf\r\n         NCt9Eum3pQn4HyHtk5/UUbUn23789lbk+oxooZyRlv9Z3lTSBpw+hdx9wMuN39KhnQqT\r\n         9LoVPJSoJHL2NZHjjukl0KZXSP1O+zyzQX76CUXp1qZJRZu3W5hMqUVUlyYq0MNFjktp\r\n         M9eR/Al2Ps4hkaRTVmxb/fRsTHat2ARubYat9fgkHm6mYOixFH5Nbyw3br8XN0zVHN7H\r\n         p8Cw=='
         },
         {
            key: 'x-google-dkim-signature',
            line:
               'X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=1e100.net; s=20161025;\r\n        h=x-gm-message-state:mime-version:in-reply-to:references:from:date\r\n         :message-id:subject:to;\r\n        bh=ZU4FAVzW1/sVCE8dx+tfpCZEQj2zL0Bd/+ESEgc9b9c=;\r\n        b=P10n6PH/tNk1nIkLpf/CGpVegZcS0UCQQAR2YjEwA2Dc6yGaaZktY/mmZWLnQeLwtS\r\n         pAy28lquPEgoh9v5WwGT1laynWFMQHCXeSiYOU/pH3J4pe9TmUlC9ezLeSQhfHfC7m1D\r\n         iQVymwS4XD1q1ft5e2VdtKA2IejGFhgzo5yOPoxTJJ+4OWLkfox4TFeqGnq+0bfwbb5F\r\n         w0LIa8lB8kxnqABfnCwl8ndxdUFGwpE7v1fEzdH87bKrqGTVNjL4dWEOB1FHRCfqFCkA\r\n         VusOJ7ISjE5OAM22BDnZ8v+xn8n8uPPkoqHgO4QwVFGeACEv/+Ykg+SywLL4LangwqRY\r\n         SzQw=='
         },
         {
            key: 'x-gm-message-state',
            line:
               'X-Gm-Message-State: AN3rC/7IFROn/vY1KZmlgzeLpuDx42FIn1B+NJRQoys+6E2hFUFgzKg5\r\n\tL9rw1UVL/WGVJiXk83GTwQv71Ctnig=='
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 10.202.214.212 with SMTP id n203mr66289oig.129.1492038593150;\r\n Wed, 12 Apr 2017 16:09:53 -0700 (PDT)'
         },
         { key: 'mime-version', line: 'MIME-Version: 1.0' },
         {
            key: 'received',
            line:
               'Received: by 10.157.53.48 with HTTP; Wed, 12 Apr 2017 16:09:52 -0700 (PDT)'
         },
         {
            key: 'x-originating-ip',
            line: 'X-Originating-IP: [75.174.146.109]'
         },
         {
            key: 'received',
            line:
               'Received: by 10.157.53.48 with HTTP; Wed, 12 Apr 2017 16:09:52 -0700 (PDT)'
         },
         {
            key: 'in-reply-to',
            line:
               'In-Reply-To: <1558362587.23021542.1491696642639.JavaMail.zimbra@cableone.net>'
         },
         {
            key: 'references',
            line:
               'References: <DB6PR0701MB219971E1AEB5A9932A51E604AB0C0@DB6PR0701MB2199.eurprd07.prod.outlook.com>\r\n <1558362587.23021542.1491696642639.JavaMail.zimbra@cableone.net>'
         },
         { key: 'from', line: 'From: Other Person <other@trailimage.com>' },
         { key: 'date', line: 'Date: Wed, 12 Apr 2017 17:09:52 -0600' },
         {
            key: 'message-id',
            line:
               'Message-ID: <CAAAYr2afe6ua=_GUuY_d75JiU8Wzed4NLkje+kEJRBQxKMdJuA@mail.gmail.com>'
         },
         {
            key: 'subject',
            line: "Subject: Fwd: Re: Program for my family's trip to Boise"
         },
         { key: 'to', line: 'To: Dad <self@trailimage.com>' },
         {
            key: 'content-type',
            line:
               'Content-Type: multipart/alternative; boundary=001a113b1b6a561ca6054d004e24'
         }
      ],
      html:
         '<div dir="auto"></div><div class="gmail_quote">---------- Forwarded message ----------<br>From: &quot;Michelle Nielsen&quot; &lt;<a href="mailto:michellenielsen@cableone.net">michellenielsen@cableone.net</a>&gt;<br>Date: Apr 8, 2017 6:10 PM<br>Subject: Re: Program for my family&#39;s trip to Boise<br>To: &quot;Alexis Coussa-Cariou&quot; &lt;<a href="mailto:alexiscoussacariou@hotmail.fr">alexiscoussacariou@hotmail.fr</a>&gt;<br>Cc: &quot;Tonya Lipple&quot; &lt;<a href="mailto:tdlipple@gmail.com">tdlipple@gmail.com</a>&gt;, &quot;Other Person&quot; &lt;<a href="mailto:jessica@trailimage.com">other@trailimage.com</a>&gt;<br><br type="attribution"><div><div style="font-family:arial,helvetica,sans-serif;font-size:12pt;color:#000000"><div>Anyone and everyone is welcome to join us on Saturday for all or part of the morning/lunch.  Abelskiver are a Danish pancake that is our family tradition.  Table Rock, MK Nature Center, and The Ram are always more fun with a group.  (Weather permitting) <br></div><div><br></div><div>Let me know if you/ your family would like to join us for breakfast so I can plan accordingly for food.  </div><div><br></div><div>I&#39;m looking forward to the arrival party at the airport! </div><div><br></div><div>Michelle <a href="tel:(208)%20407-2167" value="+12084072167" target="_blank">(208-407-2167</a>) </div><div><br></div><hr id="m_1805654723979398946zwchr"><div style="color:#000;font-weight:normal;font-style:normal;text-decoration:none;font-family:Helvetica,Arial,sans-serif;font-size:12pt"><b>From: </b>&quot;Alexis Coussa-Cariou&quot; &lt;<a href="mailto:alexiscoussacariou@hotmail.fr" target="_blank">alexiscoussacariou@hotmail.fr</a><wbr>&gt;<br><b>To: </b>&quot;Michelle Nielsen&quot; &lt;<a href="mailto:michellenielsen@cableone.net" target="_blank">michellenielsen@cableone.net</a>&gt;<wbr>, &quot;Tonya Lipple&quot; &lt;<a href="mailto:tdlipple@gmail.com" target="_blank">tdlipple@gmail.com</a>&gt;, &quot;Other Person&quot; &lt;<a href="mailto:other@trailimage.com" target="_blank">other@trailimage.com</a>&gt;<br><b>Sent: </b>Friday, April 7, 2017 4:38:54 PM<br><b>Subject: </b>Program for my family&#39;s trip to Boise<br><div><br></div>\n\n\n\n\n<div>\n<p style="margin:0.0px 0.0px 0.0px 0.0px"><span face="Helvetica Neue" size="3" color="#454545" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:&#39;Helvetica Neue&#39;;color:#454545">Program for my family&#39;s trip to Boise:</span></p>\n<p style="margin:0.0px 0.0px 0.0px 0.0px"><span face="Helvetica Neue" size="3" color="#454545" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:&#39;Helvetica Neue&#39;;color:#454545">Jérôme, Sonia, Armand (14) and Antoine (9)</span></p>\n<p style="margin:0.0px 0.0px 0.0px 0.0px;font:12.0px &#39;Helvetica Neue&#39;;color:#454545;min-height:14.0px">\n<br>\n</p>\n<p style="margin:0.0px 0.0px 0.0px 0.0px"><span face="Helvetica Neue" size="3" color="#454545" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:&#39;Helvetica Neue&#39;;color:#454545">Thursday 13th :</span></p>\n<ul style="list-style-type:hyphen">\n<li style="margin:0.0px 0.0px 0.0px 0.0px"><span face="Helvetica Neue" size="3" color="#454545" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:&#39;Helvetica Neue&#39;;color:#454545">7pm (ish) : Arrival, greeting party at airport.</span>\n</li><li style="margin:0.0px 0.0px 0.0px 0.0px"><span face="Helvetica Neue" size="3" color="#454545" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:&#39;Helvetica Neue&#39;;color:#454545">Dinner. Some place between airport and Boise Town Square</span>\n</li><li style="margin:0.0px 0.0px 0.0px 0.0px"><span face="Helvetica Neue" size="3" color="#454545" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:&#39;Helvetica Neue&#39;;color:#454545">Hotel Hyatt - near Town Square</span>\n</li></ul>\n<p style="margin:0.0px 0.0px 0.0px 0.0px;font:12.0px &#39;Helvetica Neue&#39;;color:#454545;min-height:14.0px">\n<br>\n</p>\n<p style="margin:0.0px 0.0px 0.0px 0.0px"><span face="Helvetica Neue" size="3" color="#454545" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:&#39;Helvetica Neue&#39;;color:#454545">Friday 14th :</span></p>\n<ul style="list-style-type:hyphen">\n<li style="margin:0.0px 0.0px 0.0px 0.0px"><span face="Helvetica Neue" size="3" color="#454545" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:&#39;Helvetica Neue&#39;;color:#454545">Morning/Lunch in Downtown Boise</span>\n</li><li style="margin:0.0px 0.0px 0.0px 0.0px"><span face="Helvetica Neue" size="3" color="#454545" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:&#39;Helvetica Neue&#39;;color:#454545">Afternoon : Birds of Prey (10-4:15, close at 5:00)</span>\n</li><li style="margin:0.0px 0.0px 0.0px 0.0px"><span face="Helvetica Neue" size="3" color="#454545" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:&#39;Helvetica Neue&#39;;color:#454545">Go inside Timberline</span>\n</li><li style="margin:0.0px 0.0px 0.0px 0.0px"><span face="Helvetica Neue" size="3" color="#454545" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:&#39;Helvetica Neue&#39;;color:#454545">Evening/Dinner with Abbott Family</span>\n</li></ul>\n<p style="margin:0.0px 0.0px 0.0px 0.0px;font:12.0px &#39;Helvetica Neue&#39;;color:#454545;min-height:14.0px">\n<br>\n</p>\n<p style="margin:0.0px 0.0px 0.0px 0.0px"><span face="Helvetica Neue" size="3" color="#454545" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:&#39;Helvetica Neue&#39;;color:#454545">Saturday 15th :</span></p>\n<ul style="list-style-type:hyphen">\n<li style="margin:0.0px 0.0px 0.0px 0.0px"><span face="Helvetica Neue" size="3" color="#454545" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:&#39;Helvetica Neue&#39;;color:#454545">Aebleskiver Breakfast at Nielsens</span>\n</li><li style="margin:0.0px 0.0px 0.0px 0.0px"><span face="Helvetica Neue" size="3" color="#454545" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:&#39;Helvetica Neue&#39;;color:#454545">Table Rock, Greenbelt, MK Nature Center, BSU</span>\n</li><li style="margin:0.0px 0.0px 0.0px 0.0px"><span face="Helvetica Neue" size="3" color="#454545" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:&#39;Helvetica Neue&#39;;color:#454545">Late lunch at The Ram (?)</span>\n</li><li style="margin:0.0px 0.0px 0.0px 0.0px"><span face="Helvetica Neue" size="3" color="#454545" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:&#39;Helvetica Neue&#39;;color:#454545">Evening/Dinner with Lipple Family</span>\n</li></ul>\n<p style="margin:0.0px 0.0px 0.0px 0.0px;font:12.0px &#39;Helvetica Neue&#39;;color:#454545;min-height:14.0px">\n<br>\n</p>\n<p style="margin:0.0px 0.0px 0.0px 0.0px"><span face="Helvetica Neue" size="3" color="#454545" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:&#39;Helvetica Neue&#39;;color:#454545">Sunday 16th :<span class="m_1805654723979398946Apple-converted-space"> </span></span></p>\n<ul style="list-style-type:hyphen">\n<li style="margin:0.0px 0.0px 0.0px 0.0px"><span face="Helvetica Neue" size="3" color="#454545" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:&#39;Helvetica Neue&#39;;color:#454545">Easter/Brunch at Abbott’s house</span>\n</li><li style="margin:0.0px 0.0px 0.0px 0.0px"><span face="Helvetica Neue" size="3" color="#454545" style="font-style:normal;font-variant:normal;font-weight:normal;font-stretch:normal;font-size:medium;line-height:normal;font-family:&#39;Helvetica Neue&#39;;color:#454545">4pm (ish) : Departure (flight)</span>\n</li></ul>\n</div>\n\n\n</div><div><br></div></div></div></div>\n',
      text:
         '---------- Forwarded message ----------\nFrom: "Michelle Nielsen" <michellenielsen@cableone.net>\nDate: Apr 8, 2017 6:10 PM\nSubject: Re: Program for my family\'s trip to Boise\nTo: "Alexis Coussa-Cariou" <alexiscoussacariou@hotmail.fr>\nCc: "Tonya Lipple" <tdlipple@gmail.com>, "Other Person" <\nother@trailimage.com>\n\nAnyone and everyone is welcome to join us on Saturday for all or part of\nthe morning/lunch.  Abelskiver are a Danish pancake that is our family\ntradition.  Table Rock, MK Nature Center, and The Ram are always more fun\nwith a group.  (Weather permitting)\n\nLet me know if you/ your family would like to join us for breakfast so I\ncan plan accordingly for food.\n\nI\'m looking forward to the arrival party at the airport!\n\nMichelle (208-407-2167 <(208)%20407-2167>)\n\n------------------------------\n*From: *"Alexis Coussa-Cariou" <alexiscoussacariou@hotmail.fr>\n*To: *"Michelle Nielsen" <michellenielsen@cableone.net>, "Tonya Lipple" <\ntdlipple@gmail.com>, "Other Person" <other@trailimage.com>\n*Sent: *Friday, April 7, 2017 4:38:54 PM\n*Subject: *Program for my family\'s trip to Boise\n\nProgram for my family\'s trip to Boise:\n\nJérôme, Sonia, Armand (14) and Antoine (9)\n\n\nThursday 13th :\n\n   - 7pm (ish) : Arrival, greeting party at airport.\n   - Dinner. Some place between airport and Boise Town Square\n   - Hotel Hyatt - near Town Square\n\n\nFriday 14th :\n\n   - Morning/Lunch in Downtown Boise\n   - Afternoon : Birds of Prey (10-4:15, close at 5:00)\n   - Go inside Timberline\n   - Evening/Dinner with Abbott Family\n\n\nSaturday 15th :\n\n   - Aebleskiver Breakfast at Nielsens\n   - Table Rock, Greenbelt, MK Nature Center, BSU\n   - Late lunch at The Ram (?)\n   - Evening/Dinner with Lipple Family\n\n\nSunday 16th :\n\n   - Easter/Brunch at Abbott’s house\n   - 4pm (ish) : Departure (flight)\n',
      textAsHtml:
         '<p>---------- Forwarded message ----------<br/>From: &quot;Michelle Nielsen&quot; <a href="mailto:&lt;michellenielsen@cableone.net">&lt;michellenielsen@cableone.net</a>&gt;<br/>Date: Apr 8, 2017 6:10 PM<br/>Subject: Re: Program for my family&apos;s trip to Boise<br/>To: &quot;Alexis Coussa-Cariou&quot; <a href="mailto:&lt;alexiscoussacariou@hotmail.fr">&lt;alexiscoussacariou@hotmail.fr</a>&gt;<br/>Cc: &quot;Tonya Lipple&quot; <a href="mailto:&lt;tdlipple@gmail.com">&lt;tdlipple@gmail.com</a>&gt;, &quot;Other Person&quot; &lt;<br/><a href="mailto:other@trailimage.com">other@trailimage.com</a>&gt;</p><p>Anyone and everyone is welcome to join us on Saturday for all or part of<br/>the morning/lunch.  Abelskiver are a Danish pancake that is our family<br/>tradition.  Table Rock, MK Nature Center, and The Ram are always more fun<br/>with a group.  (Weather permitting)</p><p>Let me know if you/ your family would like to join us for breakfast so I<br/>can plan accordingly for food.</p><p>I&apos;m looking forward to the arrival party at the airport!</p><p>Michelle (208-407-2167 &lt;(208)%20407-2167&gt;)</p><p>------------------------------<br/>*From: *&quot;Alexis Coussa-Cariou&quot; <a href="mailto:&lt;alexiscoussacariou@hotmail.fr">&lt;alexiscoussacariou@hotmail.fr</a>&gt;<br/>*To: *&quot;Michelle Nielsen&quot; <a href="mailto:&lt;michellenielsen@cableone.net">&lt;michellenielsen@cableone.net</a>&gt;, &quot;Tonya Lipple&quot; &lt;<br/><a href="mailto:tdlipple@gmail.com">tdlipple@gmail.com</a>&gt;, &quot;Other Person&quot; <a href="mailto:&lt;other@trailimage.com">&lt;other@trailimage.com</a>&gt;<br/>*Sent: *Friday, April 7, 2017 4:38:54 PM<br/>*Subject: *Program for my family&apos;s trip to Boise</p><p>Program for my family&apos;s trip to Boise:</p><p>J&eacute;r&ocirc;me, Sonia, Armand (14) and Antoine (9)</p><p>Thursday 13th :</p><p>   - 7pm (ish) : Arrival, greeting party at airport.<br/>   - Dinner. Some place between airport and Boise Town Square<br/>   - Hotel Hyatt - near Town Square</p><p>Friday 14th :</p><p>   - Morning/Lunch in Downtown Boise<br/>   - Afternoon : Birds of Prey (10-4:15, close at 5:00)<br/>   - Go inside Timberline<br/>   - Evening/Dinner with Abbott Family</p><p>Saturday 15th :</p><p>   - Aebleskiver Breakfast at Nielsens<br/>   - Table Rock, Greenbelt, MK Nature Center, BSU<br/>   - Late lunch at The Ram (?)<br/>   - Evening/Dinner with Lipple Family</p><p>Sunday 16th :</p><p>   - Easter/Brunch at Abbott&rsquo;s house<br/>   - 4pm (ish) : Departure (flight)</p>',
      subject: "Fwd: Re: Program for my family's trip to Boise",
      references: [
         '<DB6PR0701MB219971E1AEB5A9932A51E604AB0C0@DB6PR0701MB2199.eurprd07.prod.outlook.com>',
         '<1558362587.23021542.1491696642639.JavaMail.zimbra@cableone.net>'
      ],
      date: '2017-04-12T23:09:52.000Z',
      to: {
         value: [{ address: 'self@trailimage.com', name: 'Dad' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Dad</span> &lt;<a href="mailto:self@trailimage.com" class="mp_address_email">self@trailimage.com</a>&gt;</span>',
         text: 'Dad <self@trailimage.com>'
      },
      from: {
         value: [{ address: 'other@trailimage.com', name: 'Other Person' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Other Person</span> &lt;<a href="mailto:other@trailimage.com" class="mp_address_email">other@trailimage.com</a>&gt;</span>',
         text: 'Other Person <other@trailimage.com>'
      },
      messageId:
         '<CAAAYr2afe6ua=_GUuY_d75JiU8Wzed4NLkje+kEJRBQxKMdJuA@mail.gmail.com>',
      inReplyTo:
         '<1558362587.23021542.1491696642639.JavaMail.zimbra@cableone.net>'
   },
   {
      attachments: [],
      headers: {},
      headerLines: [
         { key: 'x-gm-thrid', line: 'X-GM-THRID: 1564515841342733874' },
         {
            key: 'x-gmail-labels',
            line: 'X-Gmail-Labels: Inbox,Important,Family/Jessica'
         },
         { key: 'delivered-to', line: 'Delivered-To: self@trailimage.com' },
         {
            key: 'received',
            line:
               'Received: by 10.28.206.4 with SMTP id e4csp492776wmg;\r\n        Wed, 12 Apr 2017 16:09:35 -0700 (PDT)'
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 10.202.87.70 with SMTP id l67mr63789oib.182.1492038575494;\r\n        Wed, 12 Apr 2017 16:09:35 -0700 (PDT)'
         },
         { key: 'return-path', line: 'Return-Path: <other@trailimage.com>' },
         {
            key: 'received',
            line:
               'Received: from mail-oi0-x22f.google.com (mail-oi0-x22f.google.com. [2607:f8b0:4003:c06::22f])\r\n        by mx.google.com with ESMTPS id h68si10182993oth.126.2017.04.12.16.09.35\r\n        for <self@trailimage.com>\r\n        (version=TLS1_2 cipher=ECDHE-RSA-AES128-GCM-SHA256 bits=128/128);\r\n        Wed, 12 Apr 2017 16:09:35 -0700 (PDT)'
         },
         {
            key: 'received-spf',
            line:
               'Received-SPF: neutral (google.com: 2607:f8b0:4003:c06::22f is neither permitted nor denied by best guess record for domain of other@trailimage.com) client-ip=2607:f8b0:4003:c06::22f;'
         },
         {
            key: 'authentication-results',
            line:
               'Authentication-Results: mx.google.com;\r\n       dkim=pass header.i=@trailimage-com.20150623.gappssmtp.com;\r\n       spf=neutral (google.com: 2607:f8b0:4003:c06::22f is neither permitted nor denied by best guess record for domain of other@trailimage.com) smtp.mailfrom=other@trailimage.com'
         },
         {
            key: 'received',
            line:
               'Received: by mail-oi0-x22f.google.com with SMTP id g204so48935858oib.1\r\n        for <self@trailimage.com>; Wed, 12 Apr 2017 16:09:35 -0700 (PDT)'
         },
         {
            key: 'dkim-signature',
            line:
               'DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=trailimage-com.20150623.gappssmtp.com; s=20150623;\r\n        h=mime-version:in-reply-to:references:from:date:message-id:subject:to;\r\n        bh=h+94iG1Pcx0TWXo8M4+8BmUT8joeE3oGcZDJKhIR2bo=;\r\n        b=jNDmzk6h5ur5039z5DuhTJHN/OaEot41ILOBJwtr952oxa9U3Tvsuh2CWYZZxMQskf\r\n         vV/bgI2gzIVfa7C/MpGFWInXpnO5JvXpJ/yxNtK7YXS3l+J33c/Q7HwAFXZ34DxIhxfn\r\n         umDhqf5/oo/fIRam/ROY5KNqVbwX8o3ymKb6UMaadWbeduOoJfrQj8vZAt88zJl0jIjT\r\n         Vu3vylao28AAdYWG8oR9SbIZp6hnpnSPvrjH99tKmZ3DBCCjAg0tzb3kBy7W7JLxOkS1\r\n         a1cYYlKfIiqYjihW1KluVyZNj9EfM7O2xkVKxn54PD04679QWjvKR8xWhgJTH+rVWsH0\r\n         9ZqA=='
         },
         {
            key: 'x-google-dkim-signature',
            line:
               'X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=1e100.net; s=20161025;\r\n        h=x-gm-message-state:mime-version:in-reply-to:references:from:date\r\n         :message-id:subject:to;\r\n        bh=h+94iG1Pcx0TWXo8M4+8BmUT8joeE3oGcZDJKhIR2bo=;\r\n        b=CxXhgL+cehd8IL2LmyHZLgvjVvLgKt09zS0KRoBBw9VD0t1bAbYffnc73JFPgLUItM\r\n         ODa6HOi4TihjhwBaygo4Eq3WMMdAGl3X3ASAlFQk0k0KgP7pF9SXew/Yl9T0Ad4RpbJX\r\n         Fpn0nsvLrUuA2muQj61m+fhwAUfal/KXE17qFMLBRjPnfZuSEqS9GKufPgl5zjrd8/Cz\r\n         emAOpT+OxX0XBjxt0sq+B9UMDd8+Z7l3SgmXX48FaXfjbEKj3ro+hRIwBCZHZFyqQmpd\r\n         RZRYaQ9Xmzh0fHgaUQEO96b6X18L0PaNyN+pQ2MIrmWg0fgsHAOxhtWVv9Elvt86jgBI\r\n         JaZg=='
         },
         {
            key: 'x-gm-message-state',
            line:
               'X-Gm-Message-State: AN3rC/6Uv9AVdV2LmKf6cj6l5kVYkCfnpO0/9V0X6v92U6zatTtjd7/N\r\n\tUdcGu74oiIx6MMO2oKOAvtGp8JyFMQ=='
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 10.157.8.117 with SMTP id 108mr63837oty.233.1492038574892; Wed,\r\n 12 Apr 2017 16:09:34 -0700 (PDT)'
         },
         { key: 'mime-version', line: 'MIME-Version: 1.0' },
         {
            key: 'received',
            line:
               'Received: by 10.157.53.48 with HTTP; Wed, 12 Apr 2017 16:09:34 -0700 (PDT)'
         },
         {
            key: 'x-originating-ip',
            line: 'X-Originating-IP: [75.174.146.109]'
         },
         {
            key: 'received',
            line:
               'Received: by 10.157.53.48 with HTTP; Wed, 12 Apr 2017 16:09:34 -0700 (PDT)'
         },
         {
            key: 'in-reply-to',
            line:
               'In-Reply-To: <DB6PR0701MB219971E1AEB5A9932A51E604AB0C0@DB6PR0701MB2199.eurprd07.prod.outlook.com>'
         },
         {
            key: 'references',
            line:
               'References: <DB6PR0701MB219971E1AEB5A9932A51E604AB0C0@DB6PR0701MB2199.eurprd07.prod.outlook.com>'
         },
         { key: 'from', line: 'From: Other Person <other@trailimage.com>' },
         { key: 'date', line: 'Date: Wed, 12 Apr 2017 17:09:34 -0600' },
         {
            key: 'message-id',
            line:
               'Message-ID: <CAAAYr2a4rydyshPQdJTiQOwKoN6AMMG6YMXdFaHa=AFMh-0pvA@mail.gmail.com>'
         },
         {
            key: 'subject',
            line: "Subject: Fwd: Program for my family's trip to Boise"
         },
         { key: 'to', line: 'To: Dad <self@trailimage.com>' },
         {
            key: 'content-type',
            line:
               'Content-Type: multipart/alternative; boundary=94eb2c0378cc3f7e1c054d004d68'
         }
      ],
      html:
         '<div dir="auto"></div><div class="gmail_quote">---------- Forwarded message ----------<br>From: &quot;Alexis Coussa-Cariou&quot; &lt;<a href="mailto:alexiscoussacariou@hotmail.fr">alexiscoussacariou@hotmail.fr</a>&gt;<br>Date: Apr 7, 2017 4:39 PM<br>Subject: Program for my family&#39;s trip to Boise<br>To: &quot;Michelle Nielsen&quot; &lt;<a href="mailto:michellenielsen@cableone.net">michellenielsen@cableone.net</a>&gt;, &quot;Tonya Lipple&quot; &lt;<a href="mailto:tdlipple@gmail.com">tdlipple@gmail.com</a>&gt;, &quot;Other Person&quot; &lt;<a href="mailto:other@trailimage.com">other@trailimage.com</a>&gt;<br>Cc: <br><br type="attribution">\n\n\n\n<div style="word-wrap:break-word">\n<div>\n<p style="margin:0.0px 0.0px 0.0px 0.0px"><font face="Helvetica Neue" size="3" color="#454545" style="font:12.0px &#39;Helvetica Neue&#39;;color:#454545">Program for my family&#39;s trip to Boise:</font></p>\n<p style="margin:0.0px 0.0px 0.0px 0.0px"><font face="Helvetica Neue" size="3" color="#454545" style="font:12.0px &#39;Helvetica Neue&#39;;color:#454545">Jérôme, Sonia, Armand (14) and Antoine (9)</font></p>\n<p style="margin:0.0px 0.0px 0.0px 0.0px;font:12.0px &#39;Helvetica Neue&#39;;color:#454545;min-height:14.0px">\n<br>\n</p>\n<p style="margin:0.0px 0.0px 0.0px 0.0px"><font face="Helvetica Neue" size="3" color="#454545" style="font:12.0px &#39;Helvetica Neue&#39;;color:#454545">Thursday 13th :</font></p>\n<ul style="list-style-type:hyphen">\n<li style="margin:0.0px 0.0px 0.0px 0.0px"><font face="Helvetica Neue" size="3" color="#454545" style="font:12.0px &#39;Helvetica Neue&#39;;color:#454545">7pm (ish) : Arrival, greeting party at airport.</font>\n</li><li style="margin:0.0px 0.0px 0.0px 0.0px"><font face="Helvetica Neue" size="3" color="#454545" style="font:12.0px &#39;Helvetica Neue&#39;;color:#454545">Dinner. Some place between airport and Boise Town Square</font>\n</li><li style="margin:0.0px 0.0px 0.0px 0.0px"><font face="Helvetica Neue" size="3" color="#454545" style="font:12.0px &#39;Helvetica Neue&#39;;color:#454545">Hotel Hyatt - near Town Square</font>\n</li></ul>\n<p style="margin:0.0px 0.0px 0.0px 0.0px;font:12.0px &#39;Helvetica Neue&#39;;color:#454545;min-height:14.0px">\n<br>\n</p>\n<p style="margin:0.0px 0.0px 0.0px 0.0px"><font face="Helvetica Neue" size="3" color="#454545" style="font:12.0px &#39;Helvetica Neue&#39;;color:#454545">Friday 14th :</font></p>\n<ul style="list-style-type:hyphen">\n<li style="margin:0.0px 0.0px 0.0px 0.0px"><font face="Helvetica Neue" size="3" color="#454545" style="font:12.0px &#39;Helvetica Neue&#39;;color:#454545">Morning/Lunch in Downtown Boise</font>\n</li><li style="margin:0.0px 0.0px 0.0px 0.0px"><font face="Helvetica Neue" size="3" color="#454545" style="font:12.0px &#39;Helvetica Neue&#39;;color:#454545">Afternoon : Birds of Prey (10-4:15, close at 5:00)</font>\n</li><li style="margin:0.0px 0.0px 0.0px 0.0px"><font face="Helvetica Neue" size="3" color="#454545" style="font:12.0px &#39;Helvetica Neue&#39;;color:#454545">Go inside Timberline</font>\n</li><li style="margin:0.0px 0.0px 0.0px 0.0px"><font face="Helvetica Neue" size="3" color="#454545" style="font:12.0px &#39;Helvetica Neue&#39;;color:#454545">Evening/Dinner with Abbott Family</font>\n</li></ul>\n<p style="margin:0.0px 0.0px 0.0px 0.0px;font:12.0px &#39;Helvetica Neue&#39;;color:#454545;min-height:14.0px">\n<br>\n</p>\n<p style="margin:0.0px 0.0px 0.0px 0.0px"><font face="Helvetica Neue" size="3" color="#454545" style="font:12.0px &#39;Helvetica Neue&#39;;color:#454545">Saturday 15th :</font></p>\n<ul style="list-style-type:hyphen">\n<li style="margin:0.0px 0.0px 0.0px 0.0px"><font face="Helvetica Neue" size="3" color="#454545" style="font:12.0px &#39;Helvetica Neue&#39;;color:#454545">Aebleskiver Breakfast at Nielsens</font>\n</li><li style="margin:0.0px 0.0px 0.0px 0.0px"><font face="Helvetica Neue" size="3" color="#454545" style="font:12.0px &#39;Helvetica Neue&#39;;color:#454545">Table Rock, Greenbelt, MK Nature Center, BSU</font>\n</li><li style="margin:0.0px 0.0px 0.0px 0.0px"><font face="Helvetica Neue" size="3" color="#454545" style="font:12.0px &#39;Helvetica Neue&#39;;color:#454545">Late lunch at The Ram (?)</font>\n</li><li style="margin:0.0px 0.0px 0.0px 0.0px"><font face="Helvetica Neue" size="3" color="#454545" style="font:12.0px &#39;Helvetica Neue&#39;;color:#454545">Evening/Dinner with Lipple Family</font>\n</li></ul>\n<p style="margin:0.0px 0.0px 0.0px 0.0px;font:12.0px &#39;Helvetica Neue&#39;;color:#454545;min-height:14.0px">\n<br>\n</p>\n<p style="margin:0.0px 0.0px 0.0px 0.0px"><font face="Helvetica Neue" size="3" color="#454545" style="font:12.0px &#39;Helvetica Neue&#39;;color:#454545">Sunday 16th :<span class="m_-4100683364047065694Apple-converted-space"> </span></font></p>\n<ul style="list-style-type:hyphen">\n<li style="margin:0.0px 0.0px 0.0px 0.0px"><font face="Helvetica Neue" size="3" color="#454545" style="font:12.0px &#39;Helvetica Neue&#39;;color:#454545">Easter/Brunch at Abbott’s house</font>\n</li><li style="margin:0.0px 0.0px 0.0px 0.0px"><font face="Helvetica Neue" size="3" color="#454545" style="font:12.0px &#39;Helvetica Neue&#39;;color:#454545">4pm (ish) : Departure (flight)</font>\n</li></ul>\n</div>\n</div>\n\n</div>\n',
      text:
         '---------- Forwarded message ----------\nFrom: "Alexis Coussa-Cariou" <alexiscoussacariou@hotmail.fr>\nDate: Apr 7, 2017 4:39 PM\nSubject: Program for my family\'s trip to Boise\nTo: "Michelle Nielsen" <michellenielsen@cableone.net>, "Tonya Lipple" <\ntdlipple@gmail.com>, "Other Person" <other@trailimage.com>\nCc:\n\nProgram for my family\'s trip to Boise:\n\nJérôme, Sonia, Armand (14) and Antoine (9)\n\n\nThursday 13th :\n\n   - 7pm (ish) : Arrival, greeting party at airport.\n   - Dinner. Some place between airport and Boise Town Square\n   - Hotel Hyatt - near Town Square\n\n\nFriday 14th :\n\n   - Morning/Lunch in Downtown Boise\n   - Afternoon : Birds of Prey (10-4:15, close at 5:00)\n   - Go inside Timberline\n   - Evening/Dinner with Abbott Family\n\n\nSaturday 15th :\n\n   - Aebleskiver Breakfast at Nielsens\n   - Table Rock, Greenbelt, MK Nature Center, BSU\n   - Late lunch at The Ram (?)\n   - Evening/Dinner with Lipple Family\n\n\nSunday 16th :\n\n   - Easter/Brunch at Abbott’s house\n   - 4pm (ish) : Departure (flight)\n',
      textAsHtml:
         '<p>---------- Forwarded message ----------<br/>From: &quot;Alexis Coussa-Cariou&quot; <a href="mailto:&lt;alexiscoussacariou@hotmail.fr">&lt;alexiscoussacariou@hotmail.fr</a>&gt;<br/>Date: Apr 7, 2017 4:39 PM<br/>Subject: Program for my family&apos;s trip to Boise<br/>To: &quot;Michelle Nielsen&quot; <a href="mailto:&lt;michellenielsen@cableone.net">&lt;michellenielsen@cableone.net</a>&gt;, &quot;Tonya Lipple&quot; &lt;<br/><a href="mailto:tdlipple@gmail.com">tdlipple@gmail.com</a>&gt;, &quot;Other Person&quot; <a href="mailto:&lt;other@trailimage.com">&lt;other@trailimage.com</a>&gt;<br/>Cc:</p><p>Program for my family&apos;s trip to Boise:</p><p>J&eacute;r&ocirc;me, Sonia, Armand (14) and Antoine (9)</p><p>Thursday 13th :</p><p>   - 7pm (ish) : Arrival, greeting party at airport.<br/>   - Dinner. Some place between airport and Boise Town Square<br/>   - Hotel Hyatt - near Town Square</p><p>Friday 14th :</p><p>   - Morning/Lunch in Downtown Boise<br/>   - Afternoon : Birds of Prey (10-4:15, close at 5:00)<br/>   - Go inside Timberline<br/>   - Evening/Dinner with Abbott Family</p><p>Saturday 15th :</p><p>   - Aebleskiver Breakfast at Nielsens<br/>   - Table Rock, Greenbelt, MK Nature Center, BSU<br/>   - Late lunch at The Ram (?)<br/>   - Evening/Dinner with Lipple Family</p><p>Sunday 16th :</p><p>   - Easter/Brunch at Abbott&rsquo;s house<br/>   - 4pm (ish) : Departure (flight)</p>',
      subject: "Fwd: Program for my family's trip to Boise",
      references:
         '<DB6PR0701MB219971E1AEB5A9932A51E604AB0C0@DB6PR0701MB2199.eurprd07.prod.outlook.com>',
      date: '2017-04-12T23:09:34.000Z',
      to: {
         value: [{ address: 'self@trailimage.com', name: 'Dad' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Dad</span> &lt;<a href="mailto:self@trailimage.com" class="mp_address_email">self@trailimage.com</a>&gt;</span>',
         text: 'Dad <self@trailimage.com>'
      },
      from: {
         value: [{ address: 'other@trailimage.com', name: 'Other Person' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Other Person</span> &lt;<a href="mailto:other@trailimage.com" class="mp_address_email">other@trailimage.com</a>&gt;</span>',
         text: 'Other Person <other@trailimage.com>'
      },
      messageId:
         '<CAAAYr2a4rydyshPQdJTiQOwKoN6AMMG6YMXdFaHa=AFMh-0pvA@mail.gmail.com>',
      inReplyTo:
         '<DB6PR0701MB219971E1AEB5A9932A51E604AB0C0@DB6PR0701MB2199.eurprd07.prod.outlook.com>'
   },
   {
      attachments: [],
      headers: {},
      headerLines: [
         { key: 'x-gm-thrid', line: 'X-GM-THRID: 1575106913353297457' },
         {
            key: 'x-gmail-labels',
            line: 'X-Gmail-Labels: Inbox,Important,Family/Jessica'
         },
         { key: 'delivered-to', line: 'Delivered-To: self@trailimage.com' },
         {
            key: 'received',
            line:
               'Received: by 10.12.153.81 with SMTP id i17csp3194987qvd;\r\n        Mon, 7 Aug 2017 13:50:08 -0700 (PDT)'
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 10.176.80.144 with SMTP id c16mr1206751uaa.100.1502139008914;\r\n        Mon, 07 Aug 2017 13:50:08 -0700 (PDT)'
         },
         {
            key: 'arc-seal',
            line:
               'ARC-Seal: i=1; a=rsa-sha256; t=1502139008; cv=none;\r\n        d=google.com; s=arc-20160816;\r\n        b=jV3EJD0m+gg+08BREzM6rHcui/Qj8YhTtU1AgvjZjKWnuFZFNqfWiL6S93xjpINp1X\r\n         9m0CCVsrQ+kYLW1GGpX8iTBdQvk1vplCtwM1DsYfbhx+senKG62ugJ2BXk5NDZ+hthgz\r\n         TcQit3w5uL6UNdvpC9LWtfMhtOfclrmQZrZIZjbQgZaUV2QbfjIZxsRgw3vjsl40sSUJ\r\n         nHiB2Uf19KRYJuX2heZs9IXFMaITsk6k5mx2WDLcf6RS3t7+fdLWy2NxVMBpzTGoqALB\r\n         8nGyeHjqkyfvY6W/S0zS3ihspweS+AAv8V6tIdsE+S9fVWM8/yDlhmCUZ2MYdcpw8kxR\r\n         kEvw=='
         },
         {
            key: 'arc-message-signature',
            line:
               'ARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;\r\n        h=to:subject:message-id:date:from:references:in-reply-to:mime-version\r\n         :dkim-signature:arc-authentication-results;\r\n        bh=M17ehruAPbEk3mlGySKZARNoYb4vx8aSoRbDUnQtLi4=;\r\n        b=ZK76/c8mLhiznaLosLXHBDcrrYkK/a8bFwtrR29et1mHgotWXJQmNKqSTQ2X4ajmlm\r\n         2ABojsBDe5SbZQlqiofZYkLCHy/xeB+E5rKnmbU7U/uSJI0itmb2yhcF9YKWZMrIDM0K\r\n         RRdXUzr+GCZBvCYunstBwRiJYlmgqCAMXzC9l9KYJk8IZLGFzyB8GUmEDET7SlT+EXd5\r\n         KMnFXvZW4EKUpCwD3E6WieVRWwJYEyKQEOnR5yHJEp+A//8ajCte8uHZguDyk2eGDlbm\r\n         7eTViJ+TkDtoHgQxriJkXuBftA1hBA4j4SAnSlJK42u16xpun5jBwAVvAGUggbpOQ3p5\r\n         Bq2g=='
         },
         {
            key: 'arc-authentication-results',
            line:
               'ARC-Authentication-Results: i=1; mx.google.com;\r\n       dkim=pass header.i=@trailimage-com.20150623.gappssmtp.com header.b=DONb0dI6;\r\n       spf=neutral (google.com: 2607:f8b0:400c:c08::229 is neither permitted nor denied by best guess record for domain of other@trailimage.com) smtp.mailfrom=other@trailimage.com'
         },
         { key: 'return-path', line: 'Return-Path: <other@trailimage.com>' },
         {
            key: 'received',
            line:
               'Received: from mail-ua0-x229.google.com (mail-ua0-x229.google.com. [2607:f8b0:400c:c08::229])\r\n        by mx.google.com with ESMTPS id l65si4748061vka.163.2017.08.07.13.50.08\r\n        for <self@trailimage.com>\r\n        (version=TLS1_2 cipher=ECDHE-RSA-AES128-GCM-SHA256 bits=128/128);\r\n        Mon, 07 Aug 2017 13:50:08 -0700 (PDT)'
         },
         {
            key: 'received-spf',
            line:
               'Received-SPF: neutral (google.com: 2607:f8b0:400c:c08::229 is neither permitted nor denied by best guess record for domain of other@trailimage.com) client-ip=2607:f8b0:400c:c08::229;'
         },
         {
            key: 'authentication-results',
            line:
               'Authentication-Results: mx.google.com;\r\n       dkim=pass header.i=@trailimage-com.20150623.gappssmtp.com header.b=DONb0dI6;\r\n       spf=neutral (google.com: 2607:f8b0:400c:c08::229 is neither permitted nor denied by best guess record for domain of other@trailimage.com) smtp.mailfrom=other@trailimage.com'
         },
         {
            key: 'received',
            line:
               'Received: by mail-ua0-x229.google.com with SMTP id d29so6894021uai.2\r\n        for <self@trailimage.com>; Mon, 07 Aug 2017 13:50:08 -0700 (PDT)'
         },
         {
            key: 'dkim-signature',
            line:
               'DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=trailimage-com.20150623.gappssmtp.com; s=20150623;\r\n        h=mime-version:in-reply-to:references:from:date:message-id:subject:to;\r\n        bh=M17ehruAPbEk3mlGySKZARNoYb4vx8aSoRbDUnQtLi4=;\r\n        b=DONb0dI69lDt3bSuNFf0j22SzJDNswlJxjGdBmJmlXaqHb0C4kEnY5MxnGXD8l1Zmg\r\n         fJFtHKV0TjG0dWSmLjOq0andbi5UEoZaoTs3JFjVrQhX+n/ueTBbrjD3inII9PayJRJn\r\n         bdn1F5qE+Xef9+6B7EKFgoeluIP+aUFhqApMQqXOUxKBZM/mQJFnAnDO4jPr8ZkZYS5h\r\n         JbXNdueSeAYtsxlXZmiWeDdgCHreRN0HjxVvWXD0pis+8cf6Wf8MD3x5nL+CcLAJoS6Z\r\n         7KFX0XNzTBaK7hNzWt9qTS/h/4uC2q88Cs8bj18s+PVF0GKR1OvkhE4grI8tcOO5pHfv\r\n         Qaqg=='
         },
         {
            key: 'x-google-dkim-signature',
            line:
               'X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=1e100.net; s=20161025;\r\n        h=x-gm-message-state:mime-version:in-reply-to:references:from:date\r\n         :message-id:subject:to;\r\n        bh=M17ehruAPbEk3mlGySKZARNoYb4vx8aSoRbDUnQtLi4=;\r\n        b=jihAv8b61FV8LcTnCK9tPWHdGK/3ayzBR5X2tVGzae2VMObiDPOOtKroXEjE9BiOvJ\r\n         Q3R9UoBSlCjyJ+aCtdSdGcC2kb530Bhd13pOKnSMTyCibNnkFAxk3ZCTrgrJpABJ2hd4\r\n         UXc/sC8mrW7g2p1pNbGMPcbfqUg0gZYhq0D3pXPrbfWpsd8dXIKg6dY3wgtXFT5wU2Gs\r\n         muuSF9tZmeCgE/pPPIevkwcf3rMDvoeCBKtIkreVnSe4efnYFk1NJDUriC2OQ/VsC48H\r\n         5tBC1bEc+FzC0I3/b/qM8IMgMDfdZaknFAbhpFnReRqOaRTnV0B3Q4gPnkVR0f/QSIbI\r\n         2cTQ=='
         },
         {
            key: 'x-gm-message-state',
            line:
               'X-Gm-Message-State: AHYfb5hvT5uApnoqR2q7xFwo00mblIeeh+1no++w0LuLokXuyb6m1kIa\r\n\tmur200JxE+HVpK3cyQ7SIFl8Vrexfj5DHNg='
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 10.159.61.17 with SMTP id l17mr1219659uai.78.1502139007905;\r\n Mon, 07 Aug 2017 13:50:07 -0700 (PDT)'
         },
         { key: 'mime-version', line: 'MIME-Version: 1.0' },
         {
            key: 'received',
            line:
               'Received: by 10.159.57.222 with HTTP; Mon, 7 Aug 2017 13:50:07 -0700 (PDT)'
         },
         {
            key: 'x-originating-ip',
            line: 'X-Originating-IP: [2600:1011:b109:2b3c:eb38:f33b:b97:4b7]'
         },
         {
            key: 'received',
            line:
               'Received: by 10.159.57.222 with HTTP; Mon, 7 Aug 2017 13:50:07 -0700 (PDT)'
         },
         {
            key: 'in-reply-to',
            line:
               'In-Reply-To: <CA+L9hs4AJjQ_B2_qMnziGW9ZYMOA7aKKPsVSoRGm-tBoO-X-Pw@mail.gmail.com>'
         },
         {
            key: 'references',
            line:
               'References: <CA+L9hs4AJjQ_B2_qMnziGW9ZYMOA7aKKPsVSoRGm-tBoO-X-Pw@mail.gmail.com>'
         },
         { key: 'from', line: 'From: Other Person <other@trailimage.com>' },
         { key: 'date', line: 'Date: Mon, 7 Aug 2017 14:50:07 -0600' },
         {
            key: 'message-id',
            line:
               'Message-ID: <CAAAYr2Y2tLSxUSm0zF_9Aq7ZL+40ME+U72Er5FhkKuqAw=Pucw@mail.gmail.com>'
         },
         { key: 'subject', line: 'Subject: Fwd: Prior year distribution' },
         { key: 'to', line: 'To: Dad <self@trailimage.com>' },
         {
            key: 'content-type',
            line:
               'Content-Type: multipart/alternative; boundary="f403045f6d5cf89b8c05562ffd71"'
         }
      ],
      html:
         '<div dir="auto"></div><div class="gmail_quote">---------- Forwarded message ----------<br>From: &quot;Wings Boosters Board&quot; &lt;<a href="mailto:wingsbooster@gmail.com">wingsbooster@gmail.com</a>&gt;<br>Date: Aug 7, 2017 1:25 PM<br>Subject: Prior year distribution<br>To: &quot;Jessica Abbott&quot; &lt;<a href="mailto:other@trailimage.com">jessica@trailimage.com</a>&gt;<br>Cc: <br><br type="attribution"><div dir="ltr"><div dir="ltr" style="font-size:12.8px"><span style="font-size:12.8px">The total amount to be distributed to Brenna&#39;s meet account is $175.00.  It will be put into her meet account the first week of November 2017.</span></div><div dir="ltr" style="font-size:12.8px"><span style="font-size:12.8px">  </span></div><div style="font-size:12.8px"><div><span style="font-size:12.8px">There is $6,300 to distribute.  There was 252 shifts worked divided by the $6,300 we had to distribute.  That worked out to $25.00 per shift.  </span></div><div><span style="font-size:12.8px"><br></span></div><div><span style="font-size:12.8px">If you have any questions please let me know.</span></div><div><span style="font-size:12.8px"><br></span></div><div><span style="font-size:12.8px">Thank you,</span></div><div><span style="font-size:12.8px">Lauretta</span></div></div></div>\n</div>\n',
      text:
         '---------- Forwarded message ----------\nFrom: "Wings Boosters Board" <wingsbooster@gmail.com>\nDate: Aug 7, 2017 1:25 PM\nSubject: Prior year distribution\nTo: "Other Person" <other@trailimage.com>\nCc:\n\nThe total amount to be distributed to Brenna\'s meet account is $175.00.  It\nwill be put into her meet account the first week of November 2017.\n\nThere is $6,300 to distribute.  There was 252 shifts worked divided by the\n$6,300 we had to distribute.  That worked out to $25.00 per shift.\n\nIf you have any questions please let me know.\n\nThank you,\nLauretta\n',
      textAsHtml:
         '<p>---------- Forwarded message ----------<br/>From: &quot;Wings Boosters Board&quot; <a href="mailto:&lt;wingsbooster@gmail.com">&lt;wingsbooster@gmail.com</a>&gt;<br/>Date: Aug 7, 2017 1:25 PM<br/>Subject: Prior year distribution<br/>To: &quot;Other Person&quot; <a href="mailto:&lt;other@trailimage.com">&lt;other@trailimage.com</a>&gt;<br/>Cc:</p><p>The total amount to be distributed to Brenna&apos;s meet account is $175.00.  It<br/>will be put into her meet account the first week of November 2017.</p><p>There is $6,300 to distribute.  There was 252 shifts worked divided by the<br/>$6,300 we had to distribute.  That worked out to $25.00 per shift.</p><p>If you have any questions please let me know.</p><p>Thank you,<br/>Lauretta</p>',
      subject: 'Fwd: Prior year distribution',
      references:
         '<CA+L9hs4AJjQ_B2_qMnziGW9ZYMOA7aKKPsVSoRGm-tBoO-X-Pw@mail.gmail.com>',
      date: '2017-08-07T20:50:07.000Z',
      to: {
         value: [{ address: 'self@trailimage.com', name: 'Dad' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Dad</span> &lt;<a href="mailto:self@trailimage.com" class="mp_address_email">self@trailimage.com</a>&gt;</span>',
         text: 'Dad <self@trailimage.com>'
      },
      from: {
         value: [{ address: 'other@trailimage.com', name: 'Other Person' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Other Person</span> &lt;<a href="mailto:other@trailimage.com" class="mp_address_email">other@trailimage.com</a>&gt;</span>',
         text: 'Other Person <other@trailimage.com>'
      },
      messageId:
         '<CAAAYr2Y2tLSxUSm0zF_9Aq7ZL+40ME+U72Er5FhkKuqAw=Pucw@mail.gmail.com>',
      inReplyTo:
         '<CA+L9hs4AJjQ_B2_qMnziGW9ZYMOA7aKKPsVSoRGm-tBoO-X-Pw@mail.gmail.com>'
   },
   {
      attachments: [],
      headers: {},
      headerLines: [
         { key: 'x-gm-thrid', line: 'X-GM-THRID: 1565514778464810134' },
         {
            key: 'x-gmail-labels',
            line: 'X-Gmail-Labels: Inbox,Important,Family/Jessica'
         },
         { key: 'delivered-to', line: 'Delivered-To: self@trailimage.com' },
         {
            key: 'received',
            line:
               'Received: by 10.28.216.66 with SMTP id p63csp896597wmg;\r\n        Sun, 7 May 2017 15:54:10 -0700 (PDT)'
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 10.202.241.67 with SMTP id p64mr20933453oih.143.1494197650174;\r\n        Sun, 07 May 2017 15:54:10 -0700 (PDT)'
         },
         { key: 'return-path', line: 'Return-Path: <other@trailimage.com>' },
         {
            key: 'received',
            line:
               'Received: from mail-oi0-x22e.google.com (mail-oi0-x22e.google.com. [2607:f8b0:4003:c06::22e])\r\n        by mx.google.com with ESMTPS id h57si4098627otd.83.2017.05.07.15.54.09\r\n        for <self@trailimage.com>\r\n        (version=TLS1_2 cipher=ECDHE-RSA-AES128-GCM-SHA256 bits=128/128);\r\n        Sun, 07 May 2017 15:54:10 -0700 (PDT)'
         },
         {
            key: 'received-spf',
            line:
               'Received-SPF: neutral (google.com: 2607:f8b0:4003:c06::22e is neither permitted nor denied by best guess record for domain of other@trailimage.com) client-ip=2607:f8b0:4003:c06::22e;'
         },
         {
            key: 'authentication-results',
            line:
               'Authentication-Results: mx.google.com;\r\n       dkim=pass header.i=@trailimage-com.20150623.gappssmtp.com;\r\n       spf=neutral (google.com: 2607:f8b0:4003:c06::22e is neither permitted nor denied by best guess record for domain of other@trailimage.com) smtp.mailfrom=other@trailimage.com'
         },
         {
            key: 'received',
            line:
               'Received: by mail-oi0-x22e.google.com with SMTP id l18so33231070oig.2\r\n        for <self@trailimage.com>; Sun, 07 May 2017 15:54:09 -0700 (PDT)'
         },
         {
            key: 'dkim-signature',
            line:
               'DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=trailimage-com.20150623.gappssmtp.com; s=20150623;\r\n        h=mime-version:in-reply-to:references:from:date:message-id:subject:to;\r\n        bh=W7j6Ach40S6rWYYefFZzLowPFbf8GaP9xnQKDb1Lxgw=;\r\n        b=bNQ6juoQBINrW1NOBUmtAd+Tm0zyH2UL0whBbFlEs41bwZtXEB0Pa53MDtTmxv7HcU\r\n         Gw9KGvy6bNrXLPonpnWfhOotoUpmeQ67OK1LEZtBrr0R1eK83cZIyGOCvwLNLurpDt6Z\r\n         fK0OkEwgDCEZFYF5nlF4A9IOAwx2qdC+Za7gmfFTw/DBUkBnR3et/nxwjLGEd8Z5TGPu\r\n         HmSa9Oh5PQeJRysRS9MVygDEJhv9/2j6ySnROvylIm5azrneojC81sGksTnyMeygyGvR\r\n         NXgz3WZ2BjfT9UNz84ANbZdH0Z9ILs5B5pGNdCiYzzWd+TjHbTawLbdKTvUv5wJXXw6a\r\n         DtDg=='
         },
         {
            key: 'x-google-dkim-signature',
            line:
               'X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=1e100.net; s=20161025;\r\n        h=x-gm-message-state:mime-version:in-reply-to:references:from:date\r\n         :message-id:subject:to;\r\n        bh=W7j6Ach40S6rWYYefFZzLowPFbf8GaP9xnQKDb1Lxgw=;\r\n        b=a9Lbx42yXGM8UxrJcc3agkDPWn/xK6vn19JTT8Lo8A0cE67YeJov+UU0AGCRjIDxK7\r\n         BCKVNeqjM9ajf08RrMyenHZVFRyaEmSzjIrmQQz/CMIPZSnbGsSXrb/XPxYaM4gH+yfS\r\n         6sEU1k4hg8+W0SSxxEULalgq70CSlU21voexsbyGmBI5gRjkqTWCL5BeI4XAY7POyTno\r\n         01/DMIrOITY1MhU+DkmWtVb2K53oE7eWvZXaA4GW51PI/4inIhAS7U1HAf3/18Tlsf/C\r\n         5ThfNoCfLzolL0LsbosxuOyrQm5kgJXC1RPq82gucIBA8xD5DdR7FYskk155wSMitTbI\r\n         zk4w=='
         },
         {
            key: 'x-gm-message-state',
            line:
               'X-Gm-Message-State: AODbwcBdIsJ8rxSC5G1BsrwztcYk/E2mHigzQ7HZ8xou31i4ltccM9r2\r\n\ttvSUWKl22xy5aikbttqgNczkawXEdQ=='
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 10.202.83.206 with SMTP id h197mr4862618oib.167.1494197649559;\r\n Sun, 07 May 2017 15:54:09 -0700 (PDT)'
         },
         { key: 'mime-version', line: 'MIME-Version: 1.0' },
         {
            key: 'received',
            line:
               'Received: by 10.157.52.139 with HTTP; Sun, 7 May 2017 15:54:09 -0700 (PDT)'
         },
         { key: 'x-originating-ip', line: 'X-Originating-IP: [75.174.190.23]' },
         {
            key: 'in-reply-to',
            line:
               'In-Reply-To: <CA+L9hs6M9-FJ+-FqfjjvnYywKv+V4nY_4HsWSf9jkh7cosphMg@mail.gmail.com>'
         },
         {
            key: 'references',
            line:
               'References: <CA+L9hs6M9-FJ+-FqfjjvnYywKv+V4nY_4HsWSf9jkh7cosphMg@mail.gmail.com>'
         },
         { key: 'from', line: 'From: Other Person <other@trailimage.com>' },
         { key: 'date', line: 'Date: Sun, 7 May 2017 16:54:09 -0600' },
         {
            key: 'message-id',
            line:
               'Message-ID: <CAAAYr2bpqLeBoY3N9H029kpRfNUo6-tTnPhVpN2gW3rMHxACJA@mail.gmail.com>'
         },
         {
            key: 'subject',
            line:
               'Subject: Fwd: 3 Things to Remember: Banquet Info, Video Picture Request &\r\n Coaches Gift'
         },
         { key: 'to', line: 'To: Self Person <self@trailimage.com>' },
         {
            key: 'content-type',
            line:
               'Content-Type: multipart/alternative; boundary=001a113d6e262067e6054ef700b5'
         }
      ],
      html:
         '<div dir="ltr"><br clear="all"><div><div class="gmail_signature" data-smartmail="gmail_signature"><div dir="ltr"><div><div dir="ltr"><div dir="ltr"><div dir="ltr"><div dir="ltr"><div><img src="https://docs.google.com/uc?export=download&amp;id=0B_8dn8BmyydkLU9ZZ0xWM1YyMlU&amp;revid=0B_8dn8BmyydkMkQrUXlJZjAzSE4rNWJBbTk2VXhNQy9JOGxNPQ" width="420" height="140"><br></div><div><font face="arial narrow, sans-serif" size="4"> </font><span style="font-family:&quot;arial narrow&quot;,sans-serif;font-size:large">208-724-2867 </span><span style="font-family:&quot;arial narrow&quot;,sans-serif;font-size:large">Follow Me: </span></div><div><font face="arial narrow, sans-serif" size="4"><a href="http://www.instagram.com/abbottwellness" target="_blank"><img src="https://docs.google.com/uc?export=download&amp;id=0B_8dn8BmyydkdGdzOWJSbUJnY2s&amp;revid=0B_8dn8BmyydkK1BKUGEwZEl5MklFbWJPY1l1OFRaTExqUEpRPQ"></a><img src="https://docs.google.com/uc?export=download&amp;id=0B_8dn8BmyydkckxGeDh6WEtjZ1E&amp;revid=0B_8dn8BmyydkTVFIWkdIdW0zejVQTk50bXgrOE5FSkZGM0pBPQ"><a href="https://www.facebook.com/jessicaabbott.fanpage/" target="_blank"><img src="https://docs.google.com/uc?export=download&amp;id=0B_8dn8BmyydkOWNFR01FakE3ZFE&amp;revid=0B_8dn8Bmyydkb3pLaUdiSmN1WndiVjExL1dHYnJ3Z2VIYnlNPQ"></a><a href="http://www.pinterest.com/abbottwellness" target="_blank"><img src="https://docs.google.com/uc?export=download&amp;id=0B_8dn8BmyydkZE55eEdPR0xkTjA&amp;revid=0B_8dn8BmyydkZ1RRd0JJSVcxRWlaMjBtdHhUK2hQUWJIbDdrPQ"><br></a><br></font></div><div><span></span></div></div></div></div></div></div></div></div></div>\n<br><div class="gmail_quote">---------- Forwarded message ----------<br>From: <b class="gmail_sendername">Wings Boosters Board</b> <span dir="ltr">&lt;<a href="mailto:wingsbooster@gmail.com">wingsbooster@gmail.com</a>&gt;</span><br>Date: Sun, Apr 23, 2017 at 2:21 PM<br>Subject: 3 Things to Remember: Banquet Info, Video Picture Request &amp; Coaches Gift<br>To: Wings Boosters Board &lt;<a href="mailto:wingsbooster@gmail.com">wingsbooster@gmail.com</a>&gt;<br><br><br><div dir="ltr">Hello Team Parents,<div><br></div><div><div style="font-size:12.8px">SAVE THE DATE.  The banquet is Saturday May 20th starting at 5 pm at the Clubhouse Event Center, 7311 W Potomac Dr. Boise, ID  83704.  Dinner will be served about 5:30.   The banquet is semi-formal.  </div><div style="font-size:12.8px"><br></div><div style="font-size:12.8px"><b>Please RSVP with the number of people attending at <a href="mailto:wingsbooster@gmail.com" target="_blank">wingsbooster@gmail.com</a> by May 12th. </b></div><div style="font-size:12.8px"><br></div><div style="font-size:12.8px">The cost per person is $15, <b>your gymnast(s) are free</b>.  We would like you pay the amount due at the front office by Monday, <b>May 14th, </b>however if needed you may pay at the door on the 20th<b>. (Only cash or checks</b>. Checks made payable to the Wings Booster Club).<b> </b></div><div style="font-size:12.8px"><br></div><b style="font-size:12.8px">Pictures for the video</b><span style="font-size:12.8px">:  Please go to the following link and upload your favorite pictures of your gymnast or of her and her teammates by</span><b style="font-size:12.8px"> May 12th</b><span style="font-size:12.8px">.  If possible, please provide names and event in the description.</span></div><div><span style="color:rgb(33,33,33);font-family:roboto,robotodraft,helvetica,arial,sans-serif;font-size:14px"><br></span></div><div><span style="color:rgb(33,33,33);font-family:roboto,robotodraft,helvetica,arial,sans-serif;font-size:14px"><a href="https://goo.gl/photos/JyXsjPmTusyrNvV47" target="_blank">https://goo.gl/photos/<wbr>JyXsjPmTusyrNvV47</a>  </span><span style="color:rgb(33,33,33);font-family:roboto,robotodraft,helvetica,arial,sans-serif;font-size:14px">o</span><span style="color:rgb(33,33,33);font-family:roboto,robotodraft,helvetica,arial,sans-serif;font-size:14px">r you can just email them to </span><a href="mailto:wingsbooster@gmail.com" style="font-family:roboto,robotodraft,helvetica,arial,sans-serif;font-size:14px" target="_blank">wingsbooster@gmail.com</a></div><div><div style="font-size:12.8px"><div><br></div><div><i>Each year we all pitch in to give our amazing coaches a gift for all of their hard work through the season. There will be 2 envelopes at the front office.  One for coaches gifts and one for the banquet.  We really appreciate your support with the coaches gifts.</i></div><div><i><br></i></div>Thank you to all our fabulous parents and we hope to see you at the banquet to celebrate the girls wonderful season.</div><div style="font-size:12.8px">Kendall, Lauretta, Danielle and Kathleen</div></div></div>\n</div><br></div>\n',
      text:
         ' 208-724-2867 Follow Me:\n<http://www.instagram.com/abbottwellness>\n<https://www.facebook.com/jessicaabbott.fanpage/>\n<http://www.pinterest.com/abbottwellness>\n\n---------- Forwarded message ----------\nFrom: Wings Boosters Board <wingsbooster@gmail.com>\nDate: Sun, Apr 23, 2017 at 2:21 PM\nSubject: 3 Things to Remember: Banquet Info, Video Picture Request &\nCoaches Gift\nTo: Wings Boosters Board <wingsbooster@gmail.com>\n\n\nHello Team Parents,\n\nSAVE THE DATE.  The banquet is Saturday May 20th starting at 5 pm at the\nClubhouse Event Center, 7311 W Potomac Dr. Boise, ID  83704.  Dinner will\nbe served about 5:30.   The banquet is semi-formal.\n\n*Please RSVP with the number of people attending at wingsbooster@gmail.com\n<wingsbooster@gmail.com> by May 12th. *\n\nThe cost per person is $15, *your gymnast(s) are free*.  We would like you\npay the amount due at the front office by Monday, *May 14th, *however if\nneeded you may pay at the door on the 20th*. (Only cash or checks*. Checks\nmade payable to the Wings Booster Club).\n\n*Pictures for the video*:  Please go to the following link and upload your\nfavorite pictures of your gymnast or of her and her teammates by* May 12th*.\nIf possible, please provide names and event in the description.\n\nhttps://goo.gl/photos/JyXsjPmTusyrNvV47  or you can just email them to\nwingsbooster@gmail.com\n\n*Each year we all pitch in to give our amazing coaches a gift for all of\ntheir hard work through the season. There will be 2 envelopes at the front\noffice.  One for coaches gifts and one for the banquet.  We really\nappreciate your support with the coaches gifts.*\n\nThank you to all our fabulous parents and we hope to see you at the banquet\nto celebrate the girls wonderful season.\nKendall, Lauretta, Danielle and Kathleen\n',
      textAsHtml:
         '<p>208-724-2867 Follow Me:<br/>&lt;<a href="http://www.instagram.com/abbottwellness&gt;">http://www.instagram.com/abbottwellness&gt;</a><br/>&lt;<a href="https://www.facebook.com/jessicaabbott.fanpage/&gt;">https://www.facebook.com/jessicaabbott.fanpage/&gt;</a><br/>&lt;<a href="http://www.pinterest.com/abbottwellness&gt;">http://www.pinterest.com/abbottwellness&gt;</a></p><p>---------- Forwarded message ----------<br/>From: Wings Boosters Board <a href="mailto:&lt;wingsbooster@gmail.com">&lt;wingsbooster@gmail.com</a>&gt;<br/>Date: Sun, Apr 23, 2017 at 2:21 PM<br/>Subject: 3 Things to Remember: Banquet Info, Video Picture Request &amp;<br/>Coaches Gift<br/>To: Wings Boosters Board <a href="mailto:&lt;wingsbooster@gmail.com">&lt;wingsbooster@gmail.com</a>&gt;</p><p>Hello Team Parents,</p><p>SAVE THE DATE.  The banquet is Saturday May 20th starting at 5 pm at the<br/>Clubhouse Event Center, 7311 W Potomac Dr. Boise, ID  83704.  Dinner will<br/>be served about 5:30.   The banquet is semi-formal.</p><p>*Please RSVP with the number of people attending at <a href="mailto:wingsbooster@gmail.com">wingsbooster@gmail.com</a><br/><a href="mailto:&lt;wingsbooster@gmail.com">&lt;wingsbooster@gmail.com</a>&gt; by May 12th. *</p><p>The cost per person is $15, *your gymnast(s) are free*.  We would like you<br/>pay the amount due at the front office by Monday, *May 14th, *however if<br/>needed you may pay at the door on the 20th*. (Only cash or checks*. Checks<br/>made payable to the Wings Booster Club).</p><p>*Pictures for the video*:  Please go to the following link and upload your<br/>favorite pictures of your gymnast or of her and her teammates by* May 12th*.<br/>If possible, please provide names and event in the description.</p><p><a href="https://goo.gl/photos/JyXsjPmTusyrNvV47">https://goo.gl/photos/JyXsjPmTusyrNvV47</a>  or you can just email them to<br/><a href="mailto:wingsbooster@gmail.com">wingsbooster@gmail.com</a></p><p>*Each year we all pitch in to give our amazing coaches a gift for all of<br/>their hard work through the season. There will be 2 envelopes at the front<br/>office.  One for coaches gifts and one for the banquet.  We really<br/>appreciate your support with the coaches gifts.*</p><p>Thank you to all our fabulous parents and we hope to see you at the banquet<br/>to celebrate the girls wonderful season.<br/>Kendall, Lauretta, Danielle and Kathleen</p>',
      subject:
         'Fwd: 3 Things to Remember: Banquet Info, Video Picture Request & Coaches Gift',
      references:
         '<CA+L9hs6M9-FJ+-FqfjjvnYywKv+V4nY_4HsWSf9jkh7cosphMg@mail.gmail.com>',
      date: '2017-05-07T22:54:09.000Z',
      to: {
         value: [{ address: 'self@trailimage.com', name: 'Self Person' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Self Person</span> &lt;<a href="mailto:self@trailimage.com" class="mp_address_email">self@trailimage.com</a>&gt;</span>',
         text: 'Self Person <self@trailimage.com>'
      },
      from: {
         value: [{ address: 'other@trailimage.com', name: 'Other Person' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Other Person</span> &lt;<a href="mailto:other@trailimage.com" class="mp_address_email">other@trailimage.com</a>&gt;</span>',
         text: 'Other Person <other@trailimage.com>'
      },
      messageId:
         '<CAAAYr2bpqLeBoY3N9H029kpRfNUo6-tTnPhVpN2gW3rMHxACJA@mail.gmail.com>',
      inReplyTo:
         '<CA+L9hs6M9-FJ+-FqfjjvnYywKv+V4nY_4HsWSf9jkh7cosphMg@mail.gmail.com>'
   },
   {
      attachments: [],
      headers: {},
      headerLines: [
         { key: 'x-gm-thrid', line: 'X-GM-THRID: 1565514778464810134' },
         {
            key: 'x-gmail-labels',
            line: 'X-Gmail-Labels: Inbox,Important,Family/Jessica'
         },
         { key: 'delivered-to', line: 'Delivered-To: self@trailimage.com' },
         {
            key: 'received',
            line:
               'Received: by 10.28.206.196 with SMTP id e187csp1149597wmg;\r\n        Sun, 23 Apr 2017 16:47:16 -0700 (PDT)'
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 10.36.95.130 with SMTP id r124mr10625967itb.8.1492991236412;\r\n        Sun, 23 Apr 2017 16:47:16 -0700 (PDT)'
         },
         { key: 'return-path', line: 'Return-Path: <other@trailimage.com>' },
         {
            key: 'received',
            line:
               'Received: from mail-io0-x230.google.com (mail-io0-x230.google.com. [2607:f8b0:4001:c06::230])\r\n        by mx.google.com with ESMTPS id m136si9627327itm.63.2017.04.23.16.47.16\r\n        for <self@trailimage.com>\r\n        (version=TLS1_2 cipher=ECDHE-RSA-AES128-GCM-SHA256 bits=128/128);\r\n        Sun, 23 Apr 2017 16:47:16 -0700 (PDT)'
         },
         {
            key: 'received-spf',
            line:
               'Received-SPF: neutral (google.com: 2607:f8b0:4001:c06::230 is neither permitted nor denied by best guess record for domain of other@trailimage.com) client-ip=2607:f8b0:4001:c06::230;'
         },
         {
            key: 'authentication-results',
            line:
               'Authentication-Results: mx.google.com;\r\n       dkim=pass header.i=@trailimage-com.20150623.gappssmtp.com;\r\n       spf=neutral (google.com: 2607:f8b0:4001:c06::230 is neither permitted nor denied by best guess record for domain of other@trailimage.com) smtp.mailfrom=other@trailimage.com'
         },
         {
            key: 'received',
            line:
               'Received: by mail-io0-x230.google.com with SMTP id r16so163525869ioi.2\r\n        for <self@trailimage.com>; Sun, 23 Apr 2017 16:47:16 -0700 (PDT)'
         },
         {
            key: 'dkim-signature',
            line:
               'DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=trailimage-com.20150623.gappssmtp.com; s=20150623;\r\n        h=mime-version:in-reply-to:references:from:date:message-id:subject:to;\r\n        bh=XxFkwBOJNjNj1QTfPMNuko18nkxo1dwKS1/Vvfdg6L4=;\r\n        b=zoZV74CbQbJXvxxSFhy4foHN43qnV3LYH3i8Qp1KFpG75Ua2ekWp9c0Y+wmsRa56YD\r\n         qaZrPnvD2ut+VeCtAByf10OjUaXBpYWDemj9ulSfSi1UFDgFWqlt/cXgirpht1ijJxy0\r\n         +B0oV/FKwMNU4N7egilred+i5lHKZVATSykR/flND2hCrlS5NatKUhOrsqeTvf0BEd22\r\n         86jgfp9ly9GGBnIFE4CoYcrRac0B/AZlPxFEPOoDOsyUMrXLOjN3L+3iyiYH6INGI3++\r\n         bRf4pjDibSfnjYWJcEM3DOeTX3+jqSjkCvtUm5Bb9cae43yB1InAhYmbky/hpeLmao+p\r\n         ACBA=='
         },
         {
            key: 'x-google-dkim-signature',
            line:
               'X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=1e100.net; s=20161025;\r\n        h=x-gm-message-state:mime-version:in-reply-to:references:from:date\r\n         :message-id:subject:to;\r\n        bh=XxFkwBOJNjNj1QTfPMNuko18nkxo1dwKS1/Vvfdg6L4=;\r\n        b=fyQbzivEcP0WyftmKXUyB+v9ncgbkgin/x0b7mSNpuaFecqa2auP9Iq6tc6hxLZ8AN\r\n         GwxP245RXjQyJn0i8KC1SIaszKCLXaHNuNdNmQkZP+0Ds/NxEBD8mutDD0gw5bqhgaBC\r\n         shjH5wcqqM0os4ZIyKb6aZULYPlwzkYCowh4im+iYkO/LKNR/ewix/m5UxSdUwn/HZUz\r\n         TzWvWXPk6IqqOjeSqU5Yo9DbhTY5hj9DKGJK6Cte+BCnJzLrFDG41QDlp5ApFWjp0ZLV\r\n         7DoM1HDirBy+tsVy76byJrvC2/teaXYGwj+O0wtBkOmh3he0fed0CDrFLPCSUjn4OxBX\r\n         Wmsg=='
         },
         {
            key: 'x-gm-message-state',
            line:
               'X-Gm-Message-State: AN3rC/5NxZCghqGPGGfNTFImte4TB4WKAV8AQ/iCSqQ1iTD4xV5qTuSE\r\n\tiuc3FWnFpzlZDwKeIfqGb06iRvNdeA=='
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 10.202.198.79 with SMTP id w76mr11091846oif.154.1492991235836;\r\n Sun, 23 Apr 2017 16:47:15 -0700 (PDT)'
         },
         { key: 'mime-version', line: 'MIME-Version: 1.0' },
         {
            key: 'received',
            line:
               'Received: by 10.157.52.186 with HTTP; Sun, 23 Apr 2017 16:47:15 -0700 (PDT)'
         },
         { key: 'x-originating-ip', line: 'X-Originating-IP: [71.37.220.149]' },
         {
            key: 'in-reply-to',
            line:
               'In-Reply-To: <CA+L9hs6M9-FJ+-FqfjjvnYywKv+V4nY_4HsWSf9jkh7cosphMg@mail.gmail.com>'
         },
         {
            key: 'references',
            line:
               'References: <CA+L9hs6M9-FJ+-FqfjjvnYywKv+V4nY_4HsWSf9jkh7cosphMg@mail.gmail.com>'
         },
         { key: 'from', line: 'From: Other Person <other@trailimage.com>' },
         { key: 'date', line: 'Date: Sun, 23 Apr 2017 17:47:15 -0600' },
         {
            key: 'message-id',
            line:
               'Message-ID: <CAAAYr2ZUZzeqr=GtipHsHgMtEs9ziBqsfdvNSx__Fyc67P08tA@mail.gmail.com>'
         },
         {
            key: 'subject',
            line:
               'Subject: Fwd: 3 Things to Remember: Banquet Info, Video Picture Request &\r\n Coaches Gift'
         },
         { key: 'to', line: 'To: Self Person <self@trailimage.com>' },
         {
            key: 'content-type',
            line:
               'Content-Type: multipart/alternative; boundary=001a11c14fa643e242054dde1c51'
         }
      ],
      html:
         '<div dir="ltr"><div>To do: upload pics</div><div><br></div><div><br></div><div><div class="gmail_signature" data-smartmail="gmail_signature"><div dir="ltr"><div dir="ltr"><div dir="ltr"><div dir="ltr"><div dir="ltr"><div><font face="arial narrow, sans-serif" size="4"><br></font></div><div><span></span></div></div></div></div></div></div></div></div>\n<br><div class="gmail_quote">---------- Forwarded message ----------<br>From: <b class="gmail_sendername">Wings Boosters Board</b> <span dir="ltr">&lt;<a href="mailto:wingsbooster@gmail.com">wingsbooster@gmail.com</a>&gt;</span><br>Date: Sun, Apr 23, 2017 at 2:21 PM<br>Subject: 3 Things to Remember: Banquet Info, Video Picture Request &amp; Coaches Gift<br>To: Wings Boosters Board &lt;<a href="mailto:wingsbooster@gmail.com">wingsbooster@gmail.com</a>&gt;<br><br><br><div dir="ltr">Hello Team Parents,<div><br></div><div><div style="font-size:12.8px">SAVE THE DATE.  The banquet is Saturday May 20th starting at 5 pm at the Clubhouse Event Center, 7311 W Potomac Dr. Boise, ID  83704.  Dinner will be served about 5:30.   The banquet is semi-formal.  </div><div style="font-size:12.8px"><br></div><div style="font-size:12.8px"><b>Please RSVP with the number of people attending at <a href="mailto:wingsbooster@gmail.com" target="_blank">wingsbooster@gmail.com</a> by May 12th. </b></div><div style="font-size:12.8px"><br></div><div style="font-size:12.8px">The cost per person is $15, <b>your gymnast(s) are free</b>.  We would like you pay the amount due at the front office by Monday, <b>May 14th, </b>however if needed you may pay at the door on the 20th<b>. (Only cash or checks</b>. Checks made payable to the Wings Booster Club).<b> </b></div><div style="font-size:12.8px"><br></div><b style="font-size:12.8px">Pictures for the video</b><span style="font-size:12.8px">:  Please go to the following link and upload your favorite pictures of your gymnast or of her and her teammates by</span><b style="font-size:12.8px"> May 12th</b><span style="font-size:12.8px">.  If possible, please provide names and event in the description.</span></div><div><span style="color:rgb(33,33,33);font-family:roboto,robotodraft,helvetica,arial,sans-serif;font-size:14px"><br></span></div><div><span style="color:rgb(33,33,33);font-family:roboto,robotodraft,helvetica,arial,sans-serif;font-size:14px"><a href="https://goo.gl/photos/JyXsjPmTusyrNvV47" target="_blank">https://goo.gl/photos/<wbr>JyXsjPmTusyrNvV47</a>  </span><span style="color:rgb(33,33,33);font-family:roboto,robotodraft,helvetica,arial,sans-serif;font-size:14px">o</span><span style="color:rgb(33,33,33);font-family:roboto,robotodraft,helvetica,arial,sans-serif;font-size:14px">r you can just email them to </span><a href="mailto:wingsbooster@gmail.com" style="font-family:roboto,robotodraft,helvetica,arial,sans-serif;font-size:14px" target="_blank">wingsbooster@gmail.com</a></div><div><div style="font-size:12.8px"><div><br></div><div><i>Each year we all pitch in to give our amazing coaches a gift for all of their hard work through the season. There will be 2 envelopes at the front office.  One for coaches gifts and one for the banquet.  We really appreciate your support with the coaches gifts.</i></div><div><i><br></i></div>Thank you to all our fabulous parents and we hope to see you at the banquet to celebrate the girls wonderful season.</div><div style="font-size:12.8px">Kendall, Lauretta, Danielle and Kathleen</div></div></div>\n</div><br></div>\n',
      text:
         'To do: upload pics\n\n\n\n\n---------- Forwarded message ----------\nFrom: Wings Boosters Board <wingsbooster@gmail.com>\nDate: Sun, Apr 23, 2017 at 2:21 PM\nSubject: 3 Things to Remember: Banquet Info, Video Picture Request &\nCoaches Gift\nTo: Wings Boosters Board <wingsbooster@gmail.com>\n\n\nHello Team Parents,\n\nSAVE THE DATE.  The banquet is Saturday May 20th starting at 5 pm at the\nClubhouse Event Center, 7311 W Potomac Dr. Boise, ID  83704.  Dinner will\nbe served about 5:30.   The banquet is semi-formal.\n\n*Please RSVP with the number of people attending at wingsbooster@gmail.com\n<wingsbooster@gmail.com> by May 12th. *\n\nThe cost per person is $15, *your gymnast(s) are free*.  We would like you\npay the amount due at the front office by Monday, *May 14th, *however if\nneeded you may pay at the door on the 20th*. (Only cash or checks*. Checks\nmade payable to the Wings Booster Club).\n\n*Pictures for the video*:  Please go to the following link and upload your\nfavorite pictures of your gymnast or of her and her teammates by* May 12th*.\nIf possible, please provide names and event in the description.\n\nhttps://goo.gl/photos/JyXsjPmTusyrNvV47  or you can just email them to\nwingsbooster@gmail.com\n\n*Each year we all pitch in to give our amazing coaches a gift for all of\ntheir hard work through the season. There will be 2 envelopes at the front\noffice.  One for coaches gifts and one for the banquet.  We really\nappreciate your support with the coaches gifts.*\n\nThank you to all our fabulous parents and we hope to see you at the banquet\nto celebrate the girls wonderful season.\nKendall, Lauretta, Danielle and Kathleen\n',
      textAsHtml:
         '<p>To do: upload pics</p><p>---------- Forwarded message ----------<br/>From: Wings Boosters Board <a href="mailto:&lt;wingsbooster@gmail.com">&lt;wingsbooster@gmail.com</a>&gt;<br/>Date: Sun, Apr 23, 2017 at 2:21 PM<br/>Subject: 3 Things to Remember: Banquet Info, Video Picture Request &amp;<br/>Coaches Gift<br/>To: Wings Boosters Board <a href="mailto:&lt;wingsbooster@gmail.com">&lt;wingsbooster@gmail.com</a>&gt;</p><p>Hello Team Parents,</p><p>SAVE THE DATE.  The banquet is Saturday May 20th starting at 5 pm at the<br/>Clubhouse Event Center, 7311 W Potomac Dr. Boise, ID  83704.  Dinner will<br/>be served about 5:30.   The banquet is semi-formal.</p><p>*Please RSVP with the number of people attending at <a href="mailto:wingsbooster@gmail.com">wingsbooster@gmail.com</a><br/><a href="mailto:&lt;wingsbooster@gmail.com">&lt;wingsbooster@gmail.com</a>&gt; by May 12th. *</p><p>The cost per person is $15, *your gymnast(s) are free*.  We would like you<br/>pay the amount due at the front office by Monday, *May 14th, *however if<br/>needed you may pay at the door on the 20th*. (Only cash or checks*. Checks<br/>made payable to the Wings Booster Club).</p><p>*Pictures for the video*:  Please go to the following link and upload your<br/>favorite pictures of your gymnast or of her and her teammates by* May 12th*.<br/>If possible, please provide names and event in the description.</p><p><a href="https://goo.gl/photos/JyXsjPmTusyrNvV47">https://goo.gl/photos/JyXsjPmTusyrNvV47</a>  or you can just email them to<br/><a href="mailto:wingsbooster@gmail.com">wingsbooster@gmail.com</a></p><p>*Each year we all pitch in to give our amazing coaches a gift for all of<br/>their hard work through the season. There will be 2 envelopes at the front<br/>office.  One for coaches gifts and one for the banquet.  We really<br/>appreciate your support with the coaches gifts.*</p><p>Thank you to all our fabulous parents and we hope to see you at the banquet<br/>to celebrate the girls wonderful season.<br/>Kendall, Lauretta, Danielle and Kathleen</p>',
      subject:
         'Fwd: 3 Things to Remember: Banquet Info, Video Picture Request & Coaches Gift',
      references:
         '<CA+L9hs6M9-FJ+-FqfjjvnYywKv+V4nY_4HsWSf9jkh7cosphMg@mail.gmail.com>',
      date: '2017-04-23T23:47:15.000Z',
      to: {
         value: [{ address: 'self@trailimage.com', name: 'Self Person' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Self Person</span> &lt;<a href="mailto:self@trailimage.com" class="mp_address_email">self@trailimage.com</a>&gt;</span>',
         text: 'Self Person <self@trailimage.com>'
      },
      from: {
         value: [{ address: 'other@trailimage.com', name: 'Other Person' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Other Person</span> &lt;<a href="mailto:other@trailimage.com" class="mp_address_email">other@trailimage.com</a>&gt;</span>',
         text: 'Other Person <other@trailimage.com>'
      },
      messageId:
         '<CAAAYr2ZUZzeqr=GtipHsHgMtEs9ziBqsfdvNSx__Fyc67P08tA@mail.gmail.com>',
      inReplyTo:
         '<CA+L9hs6M9-FJ+-FqfjjvnYywKv+V4nY_4HsWSf9jkh7cosphMg@mail.gmail.com>'
   },
   {
      attachments: [],
      headers: {},
      headerLines: [
         { key: 'x-gm-thrid', line: 'X-GM-THRID: 1512959383585178440' },
         { key: 'x-gmail-labels', line: 'X-Gmail-Labels: Chat,Family/Jessica' },
         {
            key: 'from',
            line: 'From: Jessica Wright-Abbott <other@trailimage.com>'
         },
         { key: 'mime-version', line: 'MIME-Version: 1.0' },
         { key: 'content-type', line: 'Content-Type: text/plain' }
      ],
      text: 'Nice, finally\n\n',
      textAsHtml: '<p>Nice, finally</p>',
      from: {
         value: [
            { address: 'other@trailimage.com', name: 'Jessica Wright-Abbott' }
         ],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Jessica Wright-Abbott</span> &lt;<a href="mailto:other@trailimage.com" class="mp_address_email">other@trailimage.com</a>&gt;</span>',
         text: 'Jessica Wright-Abbott <other@trailimage.com>'
      },
      html: false
   },
   {
      attachments: [],
      headers: {},
      headerLines: [
         { key: 'x-gm-thrid', line: 'X-GM-THRID: 1512959383585178440' },
         { key: 'x-gmail-labels', line: 'X-Gmail-Labels: Chat' },
         { key: 'from', line: 'From: Self Person <self@trailimage.com>' },
         { key: 'mime-version', line: 'MIME-Version: 1.0' },
         { key: 'content-type', line: 'Content-Type: text/plain' }
      ],
      text: 'Got your 45 for the bed\n\n',
      textAsHtml: '<p>Got your 45 for the bed</p>',
      from: {
         value: [{ address: 'self@trailimage.com', name: 'Self Person' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Self Person</span> &lt;<a href="mailto:self@trailimage.com" class="mp_address_email">self@trailimage.com</a>&gt;</span>',
         text: 'Self Person <self@trailimage.com>'
      },
      html: false
   },
   {
      attachments: [],
      headers: {},
      headerLines: [
         { key: 'x-gm-thrid', line: 'X-GM-THRID: 1512959383585178440' },
         { key: 'x-gmail-labels', line: 'X-Gmail-Labels: Chat' },
         { key: 'from', line: 'From: Self Person <self@trailimage.com>' },
         { key: 'mime-version', line: 'MIME-Version: 1.0' },
         { key: 'content-type', line: 'Content-Type: text/plain' }
      ],
      text: 'I need to leave now if at all\n\n',
      textAsHtml: '<p>I need to leave now if at all</p>',
      from: {
         value: [{ address: 'self@trailimage.com', name: 'Self Person' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Self Person</span> &lt;<a href="mailto:self@trailimage.com" class="mp_address_email">self@trailimage.com</a>&gt;</span>',
         text: 'Self Person <self@trailimage.com>'
      },
      html: false
   },
   {
      attachments: [],
      headers: {},
      headerLines: [
         { key: 'x-gm-thrid', line: 'X-GM-THRID: 1526294327799103435' },
         { key: 'x-gmail-labels', line: 'X-Gmail-Labels: Chat,Family/Jessica' },
         {
            key: 'from',
            line: 'From: Jessica Wright-Abbott <other@trailimage.com>'
         },
         { key: 'mime-version', line: 'MIME-Version: 1.0' },
         { key: 'content-type', line: 'Content-Type: text/plain' }
      ],
      text: 'I bought color!\n\n',
      textAsHtml: '<p>I bought color!</p>',
      from: {
         value: [
            { address: 'other@trailimage.com', name: 'Jessica Wright-Abbott' }
         ],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Jessica Wright-Abbott</span> &lt;<a href="mailto:other@trailimage.com" class="mp_address_email">other@trailimage.com</a>&gt;</span>',
         text: 'Jessica Wright-Abbott <other@trailimage.com>'
      },
      html: false
   },
   {
      attachments: [],
      headers: {},
      headerLines: [
         { key: 'x-gm-thrid', line: 'X-GM-THRID: 1518414940879506736' },
         { key: 'x-gmail-labels', line: 'X-Gmail-Labels: Chat,Family/Jessica' },
         {
            key: 'from',
            line: 'From: Jessica Wright-Abbott <other@trailimage.com>'
         },
         { key: 'mime-version', line: 'MIME-Version: 1.0' },
         { key: 'content-type', line: 'Content-Type: text/plain' }
      ],
      text: 'Headed home ?\n\n',
      textAsHtml: '<p>Headed home ?</p>',
      from: {
         value: [
            { address: 'other@trailimage.com', name: 'Jessica Wright-Abbott' }
         ],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Jessica Wright-Abbott</span> &lt;<a href="mailto:other@trailimage.com" class="mp_address_email">other@trailimage.com</a>&gt;</span>',
         text: 'Jessica Wright-Abbott <other@trailimage.com>'
      },
      html: false
   },
   {
      attachments: [],
      headers: {},
      headerLines: [
         { key: 'x-gm-thrid', line: 'X-GM-THRID: 1518414940879506736' },
         { key: 'x-gmail-labels', line: 'X-Gmail-Labels: Chat,Family/Jessica' },
         {
            key: 'from',
            line: 'From: Jessica Wright-Abbott <other@trailimage.com>'
         },
         { key: 'mime-version', line: 'MIME-Version: 1.0' },
         { key: 'content-type', line: 'Content-Type: text/plain' }
      ],
      text: '\n',
      textAsHtml: '<p></p>',
      from: {
         value: [
            { address: 'other@trailimage.com', name: 'Jessica Wright-Abbott' }
         ],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Jessica Wright-Abbott</span> &lt;<a href="mailto:other@trailimage.com" class="mp_address_email">other@trailimage.com</a>&gt;</span>',
         text: 'Jessica Wright-Abbott <other@trailimage.com>'
      },
      html: false
   },
   {
      attachments: [],
      headers: {},
      headerLines: [
         { key: 'x-gm-thrid', line: 'X-GM-THRID: 1507622044728479685' },
         {
            key: 'x-gmail-labels',
            line: 'X-Gmail-Labels: Inbox,Important,Family/Jessica'
         },
         { key: 'delivered-to', line: 'Delivered-To: self@trailimage.com' },
         {
            key: 'received',
            line:
               'Received: by 10.64.246.199 with SMTP id xy7csp355608iec;\r\n        Fri, 24 Jul 2015 16:27:03 -0700 (PDT)'
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 10.107.7.105 with SMTP id 102mr27047114ioh.81.1437780422973;\r\n        Fri, 24 Jul 2015 16:27:02 -0700 (PDT)'
         },
         { key: 'return-path', line: 'Return-Path: <other@trailimage.com>' },
         {
            key: 'received',
            line:
               'Received: from mail-ig0-f179.google.com (mail-ig0-f179.google.com. [209.85.213.179])\r\n        by mx.google.com with ESMTPS id gq7si10028998icb.88.2015.07.24.16.27.02\r\n        for <self@trailimage.com>\r\n        (version=TLSv1.2 cipher=ECDHE-RSA-AES128-GCM-SHA256 bits=128/128);\r\n        Fri, 24 Jul 2015 16:27:02 -0700 (PDT)'
         },
         {
            key: 'received-spf',
            line:
               'Received-SPF: neutral (google.com: 209.85.213.179 is neither permitted nor denied by best guess record for domain of other@trailimage.com) client-ip=209.85.213.179;'
         },
         {
            key: 'authentication-results',
            line:
               'Authentication-Results: mx.google.com;\r\n       spf=neutral (google.com: 209.85.213.179 is neither permitted nor denied by best guess record for domain of other@trailimage.com) smtp.mail=other@trailimage.com'
         },
         {
            key: 'received',
            line:
               'Received: by iggf3 with SMTP id f3so30184051igg.1\r\n        for <self@trailimage.com>; Fri, 24 Jul 2015 16:27:02 -0700 (PDT)'
         },
         {
            key: 'x-google-dkim-signature',
            line:
               'X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=1e100.net; s=20130820;\r\n        h=x-gm-message-state:mime-version:in-reply-to:references:date\r\n         :message-id:subject:from:to:content-type;\r\n        bh=Zd9/+Zve1LS3gVRvMSxFOwP1EQxo4KwnGo8kBi727b8=;\r\n        b=Uq/4HUyfM3ZJM/f1OcIwDzGslPmh1mVFGb3dmXA1x4RkBqn5q3ihYEoYx7lmHVYslI\r\n         tG9wnJpIJs9E6gP5L4LC0K9uDNmowa8MQ8a05LmEuELJwsiWFN0UBxiGSeMZdQMm9ym1\r\n         nunfpFA2zL0N7yfJ7b3HPWlq5oduPlaR0shkqLqZl4QNjzYzHhJW3IuW9TmwZEA5/Er9\r\n         PYoXYcibGxNdsOXgk2Sk2QXsIexhQvPezpVrFcYKN1xMzhFtBsxpMeVMzu6+zWRF9Bd3\r\n         pkwbGK/cQjvsDjW6orsf6a7qP+p6hrl/VI8Nw0DM+W5YeqgVt6iHxzd8arfhIINNCwNq\r\n         y5PA=='
         },
         {
            key: 'x-gm-message-state',
            line:
               'X-Gm-Message-State: ALoCoQl4DtQoRYJlHII80+w+61sTo7XclBS3FrkpgE7utgMy1dyHIvNSzIG6MYw7Dut04ejTABAk'
         },
         { key: 'mime-version', line: 'MIME-Version: 1.0' },
         {
            key: 'x-received',
            line:
               'X-Received: by 10.50.225.103 with SMTP id rj7mr549137igc.59.1437780422670;\r\n Fri, 24 Jul 2015 16:27:02 -0700 (PDT)'
         },
         {
            key: 'received',
            line:
               'Received: by 10.36.133.194 with HTTP; Fri, 24 Jul 2015 16:27:02 -0700 (PDT)'
         },
         {
            key: 'x-originating-ip',
            line: 'X-Originating-IP: [2600:100e:b115:9f91:c064:8645:f0b1:7cbd]'
         },
         {
            key: 'received',
            line:
               'Received: by 10.36.133.194 with HTTP; Fri, 24 Jul 2015 16:27:02 -0700 (PDT)'
         },
         {
            key: 'in-reply-to',
            line:
               'In-Reply-To: <0.0.1F.555.1D0C5AE4E36C40C.0@omptrans.ifly.alaskaair.com>'
         },
         {
            key: 'references',
            line:
               'References: <0.0.1F.555.1D0C5AE4E36C40C.0@omptrans.ifly.alaskaair.com>'
         },
         { key: 'date', line: 'Date: Fri, 24 Jul 2015 17:27:02 -0600' },
         {
            key: 'message-id',
            line:
               'Message-ID: <CAAAYr2bDuh463mX6NBSMqGQb8A86B0Pg9+M__sQnJHMuMfnA=Q@mail.gmail.com>'
         },
         {
            key: 'subject',
            line:
               'Subject: Fwd: Check in Now for Your Flight to Portland, OR on Jul 24'
         },
         { key: 'from', line: 'From: Other Person <other@trailimage.com>' },
         { key: 'to', line: 'To: Self Person <self@trailimage.com>' },
         {
            key: 'content-type',
            line:
               'Content-Type: multipart/alternative; boundary=001a11c3a8da5bd866051ba757f4'
         }
      ],
      html:
         '<div class="gmail_quote">---------- Forwarded message ----------<br>From: &quot;Alaska Airlines&quot; &lt;<a href="mailto:service@ifly.alaskaair.com">service@ifly.alaskaair.com</a>&gt;<br>Date: Jul 23, 2015 7:16 PM<br>Subject: Check in Now for Your Flight to Portland, OR on Jul 24<br>To:  &lt;<a href="mailto:other@trailimage.com">other@trailimage.com</a>&gt;<br>Cc: <br><br type="attribution"><u></u>\n\n\n\n \n\n\n\n\n\n<div width="100%" bgcolor="#ffffff">\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<center>\n\n<table width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#ffffff" style="max-width:500px">\n\n\n\n<tr>\n<td>\n    <table cellpadding="0" cellspacing="0" border="0" align="center" width="500px">\n    <tr>\n    <td cellpadding="0" cellspacing="0" border="0" style="line-height:1px;height:1px;min-width:500px"><img src="https://static.cdn.responsys.net/i5/responsysimages/alaskaair/contentlibrary/transactional/tr_checkin_prod/Checkin_Shell/images/spacer.gif" height="1px" width="500px" style="max-height:1px;min-height:1px;display:block;width:500px;min-width:500px"></td>\n    </tr>\n    </table>\n</td>\n</tr>\n\n\n\n<tr>\n<td align="center" valign="top">\n    \n    <table align="center" cellpadding="0" cellspacing="0" border="0" style="width:460px">\n        <tr>\n        <td valign="top" style="text-align:center;font-size:0;padding-top:20px">\n        \n        \n        <div style="vertical-align:top;width:320px;display:inline-block">\n        <table cellpadding="0" cellspacing="0" border="0" width="100%">\n        <tr>\n        <td align="center" valign="top" style="padding-bottom:10px">\n            <table cellpadding="0" cellspacing="0" border="0" width="100%">\n            <tr>\n            <td align="left" valign="top" style="width:70%;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:13px;line-height:19px;color:#0e2b51;text-align:left"><a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCUCY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOXmUsjU0ugRmgRAhJMNMF9a0fYOOUmyEC4y1-1tvBJQOgPAVUonb4NBPRyRoB1Pb0_Q_3Jyjk43FVAhXBG5fRRKkN7CR2wZi1-5J6O4nzUa-JfHFtuv7zDd_pcHfoHCu9YBWLqBNyJCDlbf24qW_rszlZygHTKSvIp_B6eQfUAF9rIZnGoDG7m1Cqag7VCbjgqWw." style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:13px;line-height:19px;color:#0e2b51;text-align:left" title="Check In" target="_blank">Check In</a> &amp; start your journey</td>\n            </tr>\n            </table>\n        </td>\n        </tr>\n        </table>\n        </div>\n        \n        <div style="vertical-align:top;width:140px;display:inline-block">\n        <table cellpadding="0" cellspacing="0" border="0" width="100%">\n        <tr>\n        <td align="center" valign="top" style="padding-bottom:10px">\n            <table cellpadding="0" cellspacing="0" border="0" width="100%">\n            <tr>\n            <td valign="top" align="right">\n            \t<table cellspacing="0" border="0">\n            \t<tr>\n            \t<td align="left" valign="bottom" style="width:17px"><img src="https://static.cdn.responsys.net/i5/responsysimages/alaskaair/contentlibrary/transactional/tr_checkin_prod/Checkin_Shell/images/ala_pref_icn.jpg" width="17" height="17" border="0" alt="" title="" style="display:block;border:none;outline:none;text-decoration:none;padding:0;color:#0e2b51;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:13px;width:17px;min-height:17px"></td>\n            \t<td align="right" valign="bottom" style="width:123px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:13px;color:#0e2b51;text-align:right"><a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCWWY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7ToPJevwldscDVAemZmKiUvcZzBTKgr0B3ZXz." style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:13px;color:#0e2b51;text-align:left" title="Update Preferences" target="_blank">Update Preferences</a>\n            \t</td>\n            \t</tr>\n            \t</table>\n            </td>\n            </tr>\n            </table>\n        </td>\n        </tr>\n        </table>\n        </div>\n        \n        \n    </td>\n    </tr>\n    </table>\n    \n</td>\n</tr>\n<tr>\n<td align="center" valign="top">\n    \n    <table align="center" cellpadding="0" cellspacing="0" border="0" style="width:460px">\n    <tr>\n    <td align="left" valign="top" style="width:30%">\n    <a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DSTTRWY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7k9-GInbvmvQsWi1_wRJJwi9ONZE." target="_blank">\n    <img src="https://static.cdn.responsys.net/i5/responsysimages/alaskaair/contentlibrary/transactional/tr_checkin_prod/Checkin_Shell/images/ala_logo_128x42.jpg" width="128" height="42" border="0" alt="Alaska®" title="Alaska®" style="display:block;border:none;outline:none;text-decoration:none;padding:0;color:#0e2b51;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:13px;width:100%;min-height:auto;max-width:128px">\n    </a>\n    </td>\n    <td align="right" valign="bottom" style="width:70%">    \n        \n\n<table cellpadding="0" cellspacing="0" border="0" width="100%">\n        <tr>\n        <td align="right" valign="top" style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:14px;color:#666666;text-align:right;font-weight:normal">\n        <span style="font-style:italic">\n        Hunter,</span> you&#39;re missing out on miles.</td>\n        </tr>\n        <tr>\n        <td style="font-size:0;height:5px;line-height:5px" height="5"> </td>\n        </tr>\n        <tr>\n        <td align="right" valign="top" style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:14px;color:#0e2b51;text-align:right;font-weight:normal"><a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCYCY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7sBLOyBcvyZmRQB9lJargQq0NzpjRg8TXqejF." style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:14px;color:#0e2b51;text-align:right;font-weight:normal" target="_blank">Sign Up Today</a></td>\n        </tr>\n        </table>\n        \n    </td>\n    </tr>\n    </table>\n    \n</td>\n</tr>\n<tr>\n<td align="center" valign="top" style="padding-top:20px">\n    \n    <table bgcolor="#0e2b51" align="center" cellpadding="0" cellspacing="0" border="0" style="width:500px">\n        <tr>\n        <td valign="top" style="text-align:center;font-size:0;padding-top:5px">\n        \n        \n        <div style="vertical-align:top;width:300px;display:inline-block">\n        <table cellpadding="0" cellspacing="0" border="0" width="100%">\n        <tr>\n        <td align="left"><img src="https://static.cdn.responsys.net/i5/responsysimages/alaskaair/contentlibrary/transactional/tr_checkin_prod/Checkin_Shell/images/ala_checkin_hdr_148x80title.gif" width="148" height="80" border="0" alt="Checkin" title="Checkin" style="display:block;border:none;outline:none;text-decoration:none;padding:0;color:#ffffff;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:26px;width:148px;min-height:80px"></td>\n        </tr>\n        </table>\n        </div>\n        \n        <div style="vertical-align:bottom;width:200px;display:inline-block">\n        <table cellpadding="0" cellspacing="0" border="0" width="100%">\n        <tr>\n        <td align="center" valign="top" style="padding-bottom:20px">\n            \n            <table cellspacing="0" cellpadding="0" border="0" width="100%">\n            <tr>\n            <td style="width:20px"> </td>\n            <td align="left" style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:17px;color:#ffffff"><a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCYWY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOXmUsjU0ugRmgRAhJMNMF9a0fYOOUmyEC4y1-1tvBJQOgPAVUonb4NBPRyRoB1Pb0_Q_3Jyjk43FVAhXBG5fRRKkN7CR2wZi1-5J6O4nzUa-JfHFtuv7zDd_pcHfoHCu8kG8O35DufWa05NwA3OPRiOrTBdGWkJZoOSsngG4sVe1B5VxKoHaERngI." style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:17px;color:#ffffff" title="Start your trip now »" target="_blank">Start your trip now »</a></td>\n            </tr>\n            </table>\n            \n        </td>\n        </tr>\n        </table>\n        </div>\n        \n        \n    </td>\n    </tr>\n    </table>\n    \n    \n    <table align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#922a49" style="width:500px">\n    <tr>\n    <td align="center" valign="top" bgcolor="#922a49">\n        <table align="center" cellpadding="0" cellspacing="0" border="0" style="width:100%">\n        <tr>\n        <td align="center" valign="top" style="height:10px;line-height:10px"><img src="https://static.cdn.responsys.net/i5/responsysimages/alaskaair/contentlibrary/transactional/tr_checkin_prod/Checkin_Shell/images/ala_preTrip_hdr_500x10colorBar.gif" width="500" height="10" border="0" alt="" title="" style="display:block;border:none;outline:none;padding:0;width:100%;min-height:10px;max-width:500px"></td>\n        </tr>\n        </table> \n    </td>\n    </tr>\n    </table>\n    \n</td>\n</tr>\n<tr>\n<td align="center" valign="top">\n    \n    <table align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#e9e5dd" style="width:500px">\n    <tr>\n    <td align="center" valign="top" bgcolor="#e9e5dd" style="padding-top:20px;padding-bottom:20px">\n        <table align="center" cellpadding="0" cellspacing="0" border="0" style="width:460px">\n        <tr>\n        <td style="color:#0e2b51;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:22px;line-height:28px;font-weight:bold;text-align:left">Confirmation Code: OVSLUU</td>\n        </tr>\n        <tr>\n        <td valign="top" style="padding-top:20px">\n            \n            <table cellpadding="0" cellspacing="0" border="0" style="width:100%">\n            <tr>\n            <td align="center" valign="top" style="text-align:center;font-size:0">\n                \n                <div style="vertical-align:top;width:210px;display:inline-block">\n                    \n                    <table width="100%" border="0" cellspacing="0" cellpadding="0">\n                    <tr>\n                    <td align="left" style="padding-bottom:20px">\n                        <table border="0" cellspacing="0" cellpadding="0">\n                        <tr>\n                        <td align="center" style="border-radius:2px;background-color:#4d803b">\n                        <a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCWTY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOXmUsjU0ugRmgRAhJMNMF9a0fYOOUmyEC4y1-1tvBJQOgPAVUonb4NBPRyRoB1Pb0_Q_3Jyjk43FVAhXBG5fRRKkN7CR2wZi1-5J6O4nzUa-JfHFtuv7zDd_pcHfoHCubAIWShFs5rkvyEsj-7Qzrq5V-iAI3xN80VEkqjpECgGAF36DpjvDn8Fo6F6lfUhNCcN26Gd_A." style="font-size:14px;font-weight:bold;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;color:#ffffff;text-decoration:none;border-radius:2px;padding:12px 45px;border:2px solid #4d803b;display:inline-block" title="CHECK IN" target="_blank">CHECK IN</a></td>\n                        </tr>\n                        </table>\n                    </td>\n                    </tr>\n                    </table>\n                    \n                </div>\n                \n                <div style="vertical-align:top;width:250px;display:inline-block">\n                    <table cellpadding="0" cellspacing="0" border="0" width="100%">\n                    <tr>\n                    <td align="center" valign="top">\n                        <table cellpadding="0" cellspacing="0" border="0" width="100%">\n                        <tr>\n                        <td style="text-align:left;font-size:17px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;color:#666666">Save time and check in online. Get started now.</td>\n                        </tr>\n                        </table>\n                    </td>\n                    </tr>\n                    </table>\n                </div>\n                \n            </td>\n            </tr>\n            </table>\n            \n        </td>\n        </tr>\n        </table> \n    </td>\n    </tr>\n    </table>\n    \n</td>\n</tr>\n\n\n\n\n\n\n\n<tr>\n<td align="center" valign="top">\n    \n    <table align="center" cellpadding="0" cellspacing="0" border="0" style="width:500px">\n    <tr>\n    <td align="left" valign="top" width="500" height="300" background="https://static.cdn.responsys.net/i5/responsysimages/alaskaair/contentlibrary/transactional/tr_checkin_test/images/ala_checkin_pmod_500x300hero_dark.jpg">\n        \n        <div align="center" valign="top">\n        <table cellpadding="0" cellspacing="0" border="0" style="width:100%">\n        <tr>\n        <td align="center" valign="top" style="padding-top:50px">\n            \n            <table cellpadding="0" cellspacing="0" border="0" style="width:92%">\n            <tr>\n            <td style="font-family:Atlas,Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:36px;color:#ffffff;line-height:38px;text-align:left"><a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCARY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7X3c89Gi7X_jHcdPVHZY6KjaX0YH-EWlzPjN0Il6EAg." style="font-family:Atlas,Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:36px;color:#ffffff;text-decoration:none" title="Making Travel About You" target="_blank">Making Travel About You</a></td>\n            </tr>\n            <tr>\n            <td align="left" valign="top" style="padding-top:15px">\n                \n                <table cellspacing="0" cellpadding="0" border="0" style="width:100%">\n                <tr>\n                <td style="width:10px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:17px;color:#ffffff;line-height:23px;text-align:left">•</td>\n                <td style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:17px;color:#ffffff;line-height:23px;text-align:left">Check-in and Flight Status</td>\n                </tr>\n                <tr>\n                <td style="width:10px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:17px;color:#ffffff;line-height:23px;text-align:left">•</td>\n                <td style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:17px;color:#ffffff;line-height:23px;text-align:left">Electronic Boarding Pass</td>\n                </tr>\n                <tr>\n                <td style="width:10px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:17px;color:#ffffff;line-height:23px;text-align:left">•</td>\n                <td style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:17px;color:#ffffff;line-height:23px;text-align:left">Book Flights and Track Miles</td>\n                </tr>\n                </table>\n                \n            </td>\n            </tr>\n            <tr>\n            <td style="padding-top:20px">\n                \n                <table width="100%" border="0" cellspacing="0" cellpadding="0">\n                <tr>\n                <td align="left">\n                    <table border="0" cellspacing="0" cellpadding="0">\n                    <tr>\n                    <td align="center" style="border-radius:2px;background-color:#ffffff"><a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCATY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7XJyBsFY-EHUVDnPf6Fe1pzaX0YH-EWlzPjN0Il4." style="font-size:14px;font-weight:bold;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;color:#0e2b51;text-decoration:none;border-radius:2px;padding:12px 25px;border:2px solid #ffffff;display:inline-block" title="DOWNLOAD APP" target="_blank">DOWNLOAD APP</a></td>\n                    </tr>\n                    </table>\n                </td>\n                </tr>\n                </table>\n                \n            </td>\n            </tr>\n            </table>\n            \n        </td>\n        </tr>\n        </table>\n        </div>\n        \n    </td>\n    </tr>\n    </table>\n    \n</td>\n</tr>\n\n<tr>\n<td align="center" valign="top">\n    \n    <table cellpadding="0" cellspacing="0" border="0" style="width:500px">\n    <tr>\n    <td align="center" valign="top" bgcolor="#e37d38" style="width:10px;font-size:1px"> </td>\n    <td align="center" valign="top" style="width:10px;font-size:1px"> </td>\n    <td align="center" valign="top" style="padding-top:20px;padding-bottom:40px">\n        \n        <table align="left" cellpadding="0" cellspacing="0" border="0" style="width:460px">\n        <tr>\n        <td style="color:#0e2b51;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:22px;line-height:28px;font-weight:bold;text-align:left">Your Trip Details</td>\n        </tr>\n        <tr>\n        <td style="padding-top:10px;color:#666666;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:17px;line-height:23px;text-align:left">Confirmation Code: OVSLUU</td>\n        </tr>\n        <tr>\n        <td style="padding-top:10px;color:#122d3e;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:22px;line-height:28px;font-weight:bold;text-align:left">Boise  <img src="https://static.cdn.responsys.net/i5/responsysimages/alaskaair/contentlibrary/transactional/tr_checkin_prod/Checkin_Shell/images/ala_plane_icn.gif" width="33" height="25" border="0" alt="text" title="text" style="display:inline-block;border:none;outline:none;text-decoration:none;padding:0;color:#122d3e;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:14px;width:33px;min-height:25px;vertical-align:text-bottom">  Portland, OR</td>\n        </tr>\n        <tr>\n        <td style="color:#122d3e;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:22px;line-height:28px;text-align:left">Jul 24, 2015</td>\n        </tr>\n        \n        \n\n<td><u></u>\n<tr>\n<td style="padding-top:20px" valign="top" align="center">\n<table style="width:100%" border="0" cellspacing="0" cellpadding="0">\n<tr>\n<td style="text-align:center;font-size:0" valign="top" align="center">\n\n<div style="vertical-align:top;width:200px;display:inline-block">\n<table width="100%" border="0" cellspacing="0" cellpadding="0">\n<tr>\n<td style="padding-bottom:20px" valign="top" align="center">\n<table style="min-width:100%" width="100%" border="0" cellspacing="0" cellpadding="5">\n<tr>\n<td style="width:50%" valign="top" align="left"><img style="display:inline-block;border:none;outline:none;text-decoration:none;padding:0;color:#122d3e;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:14px;width:94px;min-height:28px;vertical-align:text-bottom" title="Alaska" alt="Alaska" border="0" height="28" width="94" src="https://static.cdn.responsys.net/i5/responsysimages/alaskaair/contentlibrary/transactional/resources/94x28pxairlinelogos/AirlineLogos/AS.png"></td><td style="width:50%;text-align:left;font-size:13px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;color:#666666;text-align:left">Seat</td>\n</tr>\n<tr>\n<td style="text-align:left;font-size:22px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;color:#122d3e;text-align:left">2307</td><td style="text-align:left;font-size:22px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;color:#122d3e;text-align:left"></td>\n</tr>\n</table>\n</td>\n</tr>\n</table>\n</div>\n\n<div style="vertical-align:top;width:260px;display:inline-block">\n<table width="100%" border="0" cellspacing="0" cellpadding="0">\n<tr>\n<td style="padding-bottom:20px" valign="top" align="center">\n<table style="min-width:100%" width="100%" border="0" cellspacing="0" cellpadding="5">\n<tr>\n<td style="width:50%;padding-top:10px;text-align:left;font-size:13px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;color:#666666;text-align:left">Depart (BOI)</td><td style="width:50%;padding-top:10px;text-align:left;font-size:13px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;color:#666666;text-align:left">Arrive (PDX)</td>\n</tr>\n<tr>\n<td style="padding-top:13px;text-align:left;font-size:22px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;color:#122d3e;text-align:left"><span style="color:#333333">6:45 PM</span></td><td style="padding-top:13px;text-align:left;font-size:22px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;color:#122d3e;text-align:left"><span style="color:#333333">7:02 PM</span></td>\n</tr>\n</table>\n</td>\n</tr>\n</table>\n</div>\n\n</td>\n</tr>\n</table>\n</td>\n</tr><tr>\n<td style="text-align:left;color:#122d3e;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:17px;line-height:23px"><a title="See Full Itinerary" style="color:#122d3e;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:17px;line-height:23px;text-decoration:underline" href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCAWY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOXmUsjU0ugRmgRAhJMNMF9a0fYOOUmyEC4y1-1tvBJQOgPAVUonb4NBPRyRoB1Pb0_Q_3Jyjk43FVAhXBG5fRRKkN7CR2wZi1-5J6O4nzUaVS1rCB_c8yESYKQytabJWUpI0AwkKcwCXgvGIPgmkGM9L0WU_Sk." target="_blank">See Full Itinerary</a>  | \n        <a title="Manage My Trip" style="color:#122d3e;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:17px;line-height:23px;text-decoration:underline" href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCAAY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOXmUsjU0ugRmgRAhJMNMF9a0fYOOUmyEC4y1-1tvBJQOgPAVUonb4NBPRyRoB1Pb0_Q_3Jyjk43FVAhXBG5fRRKkN7CR2wZi1-5J6O4nzUaN1D4Vex_tfGgcHgvkYBgk2twmVFvP28GdLbJ8DiyXs." target="_blank">Manage My Trip</a></td>\n</tr><tr>\n<td style="padding-top:20px;color:#122d3e;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:13px;line-height:19px;font-weight:bold;text-align:left">Special Information</td>\n</tr><tr>\n<td style="color:#666666;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:13px;line-height:19px;text-align:left">\n\t\tOperated by Horizon Air As Alaska Airlines<br>Check In with Alaska Airlines</td>\n</tr>\n\n\n        \n\n        </td></table>\n        \n    </td>\n    </tr>\n    </table>\n    \n</td>\n</tr>\n\n\n\n\n<tr>\n<td align="center" valign="top" style="padding-bottom:20px">\n    \n    <table align="center" cellpadding="0" cellspacing="0" border="0" style="width:100%">\n    <tr>\n    <td align="center" valign="top">\n    <a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCACY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7d0h4Ndqy85PlIGQm8EmdyGWpjGGDLi0." target="_blank">\n    <img src="https://static.cdn.responsys.net/i5/responsysimages/alaskaair/contentlibrary/transactional/TR_CheckIn_Prod/CCBanner_US/images/ala_checkin_banner_500x140visa.jpg" width="500" height="140" border="0" alt="Get the Visa Signature® Card" title="Get the Visa Signature® Card" style="display:block;border:none;outline:none;text-decoration:none;padding:0;color:#666666;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:14px;width:100%;min-height:auto;max-width:500px">\n    </a></td>\n    </tr>\n    </table>\n    \n</td>\n</tr>\n\n\n\n\n\n<tr>\n<td align="center" valign="top">\n    \n    <table align="center" cellpadding="0" cellspacing="0" border="0" style="width:500px">\n    <tr>\n    <td valign="top" style="text-align:center;font-size:0">\n        \n        \n        <div style="vertical-align:top;width:250px;display:inline-block">\n        <table cellpadding="0" cellspacing="0" border="0" style="width:100%"> \n        <tr>\n        <td align="left" valign="top" style="padding-bottom:20px">\n            <a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCBRY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7S-sIN5CuFsQAsiMs-xmCHWM3uWL28B0xTD470VWd." target="_blank"><img src="https://static.cdn.responsys.net/i5/responsysimages/alaskaair/contentlibrary/transactional/TR_CheckIn_Prod/BeyondEnt/images/ala_checkin_smod_250x200BeyondE.jpg" width="250" height="200" border="0" alt="Beyond Entertainment" title="Beyond Entertainment" style="display:block;border:none;outline:none;text-decoration:none;padding:0;color:#666666;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:14px;width:250px;min-height:200px">\n            </a>\n        </td>\n        </tr>\n        </table>\n        </div>\n        \n        <div style="width:250px;display:inline-block">\n        <table cellpadding="0" cellspacing="0" border="0" style="width:100%"> \n        <tr>\n        <td style="width:20px"> </td>\n        <td align="center" valign="top" style="padding-bottom:20px">\n            \n            <table cellpadding="0" cellspacing="0" border="0" style="width:100%">\n            <tr>\n            <td align="left" valign="top" style="font-family:Atlas,Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:22px;font-weight:bold;color:#0e2b51;text-align:left">Beyond Entertainment</td>\n            </tr>\n            <tr>\n            <td align="left" valign="top" style="padding-top:5px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:17px;line-height:23px;color:#666666;text-align:left">Alaska Beyond™ Entertainment, lets you watch premium movies, TV shows, and more on your own device.</td>\n            </tr>\n            <tr>\n            <td align="left" valign="top" style="padding-top:10px">\n                \n                <table border="0" cellspacing="0" cellpadding="0">\n                <tr>\n                <td align="left">\n                <a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCBTY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7VeXM4w1Uw-10eSM9hzPrjGM3uWL28B0xTD470VWd." style="font-size:17px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-weight:bold;color:#0e2b51;text-decoration:none;color:#0e2b51" title="Download the Player »" target="_blank">Download the Player »</a></td>\n                </tr>\n                </table>\n                \n            </td>\n            </tr>\n            </table>\n            \n        </td>\n        <td style="width:20px"> </td>\n        </tr>\n        </table>\n        </div>\n        \n    </td>\n    </tr>\n    </table>\n    \n</td>\n</tr>\n\n\n\n<tr>\n<td align="center" valign="top">\n    \n    <table align="center" cellpadding="0" cellspacing="0" border="0" style="width:500px">\n    <tr>\n    <td valign="top" style="text-align:center;font-size:0">\n        \n        \n        <div style="vertical-align:top;width:250px;display:inline-block">\n        <table cellpadding="0" cellspacing="0" border="0" style="width:100%"> \n        <tr>\n        <td align="left" valign="top" style="padding-bottom:20px">\n            <a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCBWY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihaGKG7EVPLpN_Pg0D32k9nfOP2p9YwMolNT64QpCvxSzcsrasD85zzZWxtQ1Ym8YNuCiczay2Y9vAvuYzTVLoZvL7wIIuPwMtUc3SJOPESSndXbnhDT-4TGaFAYajfY2msOEbAM7yBc2oLvT3-aW3rIKlYySIpkQlcjQAB3y6edYF." target="_blank"><img src="https://static.cdn.responsys.net/i5/responsysimages/alaskaair/contentlibrary/transactional/TR_CheckIn_Prod/Secondary_CarBanner/images/ala_checkin_smod_250x200carrental.jpg" width="250" height="200" border="0" alt="Shop for Cars" title="Shop for Cars" style="display:block;border:none;outline:none;text-decoration:none;padding:0;color:#666666;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:14px;width:250px;min-height:200px">\n            </a>\n        </td>\n        </tr>\n        </table>\n        </div>\n        \n        <div style="vertical-align:top;width:250px;display:inline-block">\n        <table cellpadding="0" cellspacing="0" border="0" style="width:100%"> \n        <tr>\n        <td style="width:20px"> </td>\n        <td align="center" valign="top" style="padding-bottom:20px">\n            \n            <table cellpadding="0" cellspacing="0" border="0" style="width:100%">\n            <tr>\n            <td align="left" valign="top" style="font-family:Atlas,Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:22px;font-weight:bold;color:#0e2b51;text-align:left">Car Rental Deals</td>\n            </tr>\n            <tr>\n            <td align="left" valign="top" style="padding-top:5px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:17px;line-height:23px;color:#666666;text-align:left">Book your car on <a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCYRY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m73Ay93QRZaaXQd9hsOZOtPaM3uWL28B0xTD470VWdfw." style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:17px;color:#666666;text-decoration:none" title="alaskaair.com" target="_blank">alaskaair.com</a> and enjoy:</td>\n            </tr>\n            <tr>\n            <td valign="top">\n                \n                <table cellspacing="0" cellpadding="0" border="0" style="width:100%">\n                <tr>\n                <td valign="top" style="width:10px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:17px;line-height:23px;color:#666666;text-align:left">•</td>\n                <td valign="top" style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:17px;line-height:23px;color:#666666;text-align:left">Low Price Guarantee</td>\n                </tr>\n                <tr>\n                <td valign="top" style="width:10px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:17px;line-height:23px;color:#666666;text-align:left">•</td>\n                <td valign="top" style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:17px;line-height:23px;color:#666666;text-align:left">No Service Fees</td>\n                </tr>\n                <tr>\n                <td valign="top" style="width:10px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:17px;line-height:23px;color:#666666;text-align:left">•</td>\n                <td valign="top" style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:17px;line-height:23px;color:#666666;text-align:left">Earn Miles</td>\n                </tr>\n                <tr>\n                <td valign="top" style="width:10px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:17px;line-height:23px;color:#666666;text-align:left">•</td>\n                <td valign="top" style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:17px;line-height:23px;color:#666666;text-align:left">Free Cancellation</td>\n                </tr>\n                </table>\n                \n            </td>\n            </tr>\n            <tr>\n            <td align="left" valign="top" style="padding-top:10px">\n                \n                <table border="0" cellspacing="0" cellpadding="0">\n                <tr>\n                <td align="left">\n                <a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCBAY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihaGKG7EVPLpN_Pg0D32k9nfOP2p9YwMolNT64QpCvxSzcsrasD85zzZWxtQ1Ym8YNuCiczay2Y9vAvuYzTVLoZvL7wIIuPwMtUc3SJOPESSndXbnhDT-4TGaFAYajfY2msOEbAM7yBc2oLvT3-aW3rH-qqWp3I5Y6zyekxXlNZ0Xo." style="font-size:17px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-weight:bold;color:#0e2b51;text-decoration:none;color:#0e2b51" title="Reserve Now »" target="_blank">Reserve Now »</a></td>\n                </tr>\n                </table>\n                \n            </td>\n            </tr>\n            </table>\n            \n        </td>\n        <td style="width:20px"> </td>\n        </tr>\n        </table>\n        </div>\n        \n    </td>\n    </tr>\n    </table>\n    \n</td>\n</tr>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<tr>\n<td align="center" valign="top">\n    \n    <table align="center" cellpadding="0" cellspacing="0" border="0" bgcolor="#003c68" style="width:100%">\n    <tr>\n    <td valign="top" style="text-align:center;font-size:0">\n        \n        \n        <div style="width:125px;display:inline-block">\n        <table align="left" cellpadding="0" cellspacing="0" border="0" style="width:125px"> \n        <tr>\n        <td align="center" valign="top" style="padding-bottom:20px;padding-top:20px">\n            \n            <table cellpadding="0" cellspacing="0" border="0" style="width:100%">\n            <tr>\n            <td align="center" valign="top" style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:16px;color:#ffffff;text-align:center"><a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCBCY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7z6tX8zfnpCZbnpmknXNQaN1UONnkT1Bezg." style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:17px;color:#ffffff;text-decoration:none" title="Book" target="_blank">Book</a>\n            </td>\n            </tr>\n            </table>\n            \n        </td>\n        </tr>\n        </table>\n        </div>\n        \n        <div style="width:125px;display:inline-block">\n        <table align="left" cellpadding="0" cellspacing="0" border="0" style="width:125px"> \n        <tr>\n        <td align="center" valign="top" style="padding-bottom:20px;padding-top:20px">\n            \n            <table cellpadding="0" cellspacing="0" border="0" style="width:100%">\n            <tr>\n            <td align="center" valign="top" style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:16px;color:#ffffff;text-align:center"><a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCCWY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7Ww2gZPxe2jEDlRmYS3XcZ11UONnkT1BeztoIew." style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:17px;color:#ffffff;text-decoration:none" title="Explore" target="_blank">Explore</a>\n            </td>\n            </tr>\n            </table>\n            \n        </td>\n        </tr>\n        </table>\n        </div>\n        \n        <div style="width:125px;display:inline-block">\n        <table align="left" cellpadding="0" cellspacing="0" border="0" style="width:125px"> \n        <tr>\n        <td align="center" valign="top" style="padding-bottom:20px;padding-top:20px">\n            \n            <table cellpadding="0" cellspacing="0" border="0" style="width:100%">\n            <tr>\n            <td align="center" valign="top" style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:16px;color:#ffffff;text-align:center"><a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCCCY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7OapFFB7M_i0jj-XFmB_Hpx1UONnkT1BeztoIeA0lqM." style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:16px;color:#ffffff;text-decoration:none" title="Travel Info" target="_blank">Travel Info</a>\n            </td>\n            </tr>\n            </table>\n            \n        </td>\n        </tr>\n        </table>\n        </div>\n        \n        <div style="width:125px;display:inline-block">\n        <table align="left" cellpadding="0" cellspacing="0" border="0" style="width:125px"> \n        <tr>\n        <td align="center" valign="top" style="padding-bottom:20px;padding-top:20px">\n            \n            <table cellpadding="0" cellspacing="0" border="0" style="width:100%">\n            <tr>\n            <td align="center" valign="top" style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:17px;color:#ffffff;text-align:center"><a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DSTTBAY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7Orc6ODUsGirB2bpCmUN5JN1UONnkT1Bezto." style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:16px;color:#ffffff;text-decoration:none" title="Deals" target="_blank">Deals</a>\n                </td>\n            </tr>\n            </table>\n            \n        </td>\n        </tr>\n        </table>\n        </div>\n        \n    </td>\n    </tr>\n    </table>\n    \n</td>\n</tr>\n\n\n\n<tr>\n<td align="center" valign="top">\n    \n    <table border="0" cellspacing="0" cellpadding="0" bgcolor="#e9e5dd" style="width:500px">\n    <tr>\n    <td style="padding-top:20px;padding-bottom:10px;font-family:Atlas,Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:14px;color:#0e2b51;text-align:center;font-weight:bold">\n    Stay in the Loop</td>\n    </tr>\n    <tr>\n    <td style="height:10px;line-height:10px;font-size:0" height="10"> </td>\n    </tr>\n    <tr>\n    <td align="center" valign="top">\n        <table border="0" cellspacing="0" cellpadding="0">\n        <tr>\n        <td align="center">\n        <a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCDAY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhX_hUCcCKdzLXGgZAL1b4iUl2g." target="_blank"><img src="https://static.cdn.responsys.net/i5/responsysimages/alaskaair/contentlibrary/Templates/Footer_Prod/Footer_Promotional_Recovery/images/ala_icn_23x23fb.jpg" width="23" height="23" border="0" alt="Facebook" title="Facebook" style="display:block;border:none;outline:none;text-decoration:none;padding:0;color:#666666;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:14px;width:23px;min-height:23px"></a></td>\n        <td style="width:10px"></td>\n        <td align="center">\n        <a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCDCY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhX_hUCcCKdzLXGgZAL1b4iUl2g." target="_blank"><img src="https://static.cdn.responsys.net/i5/responsysimages/alaskaair/contentlibrary/Templates/Footer_Prod/Footer_Promotional_Recovery/images/ala_icn_24x23tw.jpg" width="24" height="23" border="0" alt="Twitter" title="Twitter" style="display:block;border:none;outline:none;text-decoration:none;padding:0;color:#666666;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:14px;width:24px;min-height:23px"></a></td>\n        </tr>\n        </table>\n    </td>\n    </tr>\n    <tr>\n    <td align="center" valign="top" style="padding-top:30px;padding-bottom:20px">\n        \n        <table border="0" cellspacing="0" cellpadding="0" align="center" bgcolor="#e9e5dd" style="width:500px">\n        <tr>\n        <td style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:14px;font-weight:bold;color:#666666;text-align:center">\n        <a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCCTY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7LAR6DTqEIPkBdFdUhyi6r11UONnkT1Bezto." style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:14px;font-weight:bold;color:#666666;text-decoration:none" title="Book" target="_blank">Book</a>  /  \n        <a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCCAY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7g4RAnPwON9V7wmqw35gKM11UONnkT1BeztoIeA0." style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:14px;font-weight:bold;color:#666666;text-decoration:none" title="Explore" target="_blank">Explore</a>  /  \n        <a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCDRY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7fzzFqrvm47bH20XOUyhCTh1UONnkT1BeztoIeA0lq-Y." style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:14px;font-weight:bold;color:#666666;text-decoration:none" title="Travel Info" target="_blank">Travel Info</a>  /  \n        <a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCDTY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m71cMvrP9f1QBE2ImccmJO_N1UONnkT1BeztoI." style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:14px;font-weight:bold;color:#666666;text-decoration:none" title="Deals" target="_blank">Deals</a></td>\n        </tr>\n        <tr>\n        <td style="height:10px;line-height:10px;font-size:0" height="10"> </td>\n        </tr>\n        <tr>\n        <td style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:14px;font-weight:bold;color:#666666;text-align:center">\n        <a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBDRRY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m747zb5tjs6kWdRyMWg1lHXWKGRVEAko6Pr5KeOIX85zWL." style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:14px;font-weight:bold;color:#666666;text-decoration:none" title="Mileage Plan™" target="_blank">Mileage Plan™</a>  /  \n        <a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBDRTY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7ffjlAGhbmr2z5nzOyVnB4h1UONnkT1BeztoIeA0lqM." style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:14px;font-weight:bold;color:#666666;text-decoration:none" title="My Account" target="_blank">My Account</a>  /  \n        <a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBDRWY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7KOSEeKZ39XNbtJiF5vT_iN1UONnkT1BeztoIeA0." style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:14px;font-weight:bold;color:#666666;text-decoration:none" title="Contact" target="_blank">Contact</a></td>\n        </tr>\n        </table>\n        \n    </td>\n    </tr>\n    </table>\n    \n</td>\n</tr>\n\n    \n\n\n<tr>\n<td align="center" valign="top">\n    \n    <table border="0" cellspacing="0" cellpadding="0" bgcolor="#e9e5dd" style="width:500px">\n    <tr>\n    <td style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:13px;font-weight:bold;color:#666666;text-align:center">\n    Additional Resources and Information</td>\n    </tr>\n    <tr>\n    <td style="padding-top:20px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:13px;line-height:18px;color:#666666;text-align:center">\n    This email was sent to <a href="mailto:other@trailimage.com" target="_blank">other@trailimage.com</a>.<br>Please read about our <a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DSTTDWY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7PMKF7InSczBHldun_V1SgadyrX1cYm7aj0." style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:13px;line-height:19px;color:#666666" title="privacy policy" target="_blank">privacy policy</a>.</td>\n    </tr>\n    <tr>\n    <td style="padding-top:10px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:13px;line-height:18px;color:#666666;text-align:center;font-weight:normal">\n    To receive specials from your primary departure city,<br><a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBDRAY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7tE541EQfVcNwN55B27nY6UyosHjcAGG_itrQVslTf5w." style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:13px;line-height:19px;color:#666666;font-weight:normal" title="update your email settings" target="_blank">update your email settings</a>.</td>\n    </tr>\n    <tr>\n    <td style="padding-top:10px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:13px;line-height:19px;color:#666666;text-align:center;font-weight:normal">\n    To edit your email address or subscriptions</td>\n    </tr>\n    <tr>\n    <td align="center" valign="top" style="padding-top:10px">\n        \n        <table width="100%" border="0" cellspacing="0" cellpadding="0">\n        <tr>\n        <td align="center">\n            <table border="0" cellspacing="0" cellpadding="0">\n            <tr>\n            <td align="center" style="border-radius:2px">\n            <a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCWAY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7gkuN3EvJF7mkcMze_g2cJUyosHjcAGG_itrQVslTf0." style="font-size:14px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;color:#464444;text-decoration:none;border-radius:2px;padding:12px 25px;border:2px solid #767676;font-weight:bold;display:inline-block" title="UPDATE PREFERENCES" target="_blank">UPDATE PREFERENCES</a></td>\n            </tr>\n            </table>\n        </td>\n        </tr>\n        </table>\n        \n    </td>\n    </tr>\n    <tr>\n    <td style="padding-top:10px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:13px;line-height:18px;color:#666666;text-align:center">\n    If you no longer wish to receive Alaska<br>Airlines promotional communications, you may <a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBDRCY&amp;_ei_=EolaGGF4SNMvxFF7KucKuWMX-doBKEYJmCiiTsj2JMv10EpqR-f_zk4gj5tKZvoXeum2A31spSQZHtQzzm-EF_UL0Tt8Xbtht6XRoDWMnNvQR6L1XNitPJ5VrI3RkirZ_zzyy3cBuSfTeFt65F0eVdoQJBa31ju4olhyaJr6540IpWXqNLKoQVGhJdNdrXpaNmioVQt0AM." title="unsubscribe" target="_blank">unsubscribe</a>.<br>You may still receive transactional messages from Alaska Airlines.</td>\n    </tr>\n    <tr>\n    <td style="padding-top:10px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:13px;line-height:18px;color:#666666;text-align:center">\n    Alaska Airlines, PO Box 68900, Seattle, WA 98168-0900.<br> ©2015 Alaska Airlines. All rights reserved.</td>\n    </tr>\n    <tr>\n    <td style="padding-top:10px;padding-bottom:20px;font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:13px;line-height:18px;color:#666666;text-align:center">\n    View our <a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBDSRY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7lx1wn9pxAslVQFZ8D_9RMqdyrX1cYm7aj0." style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:13px;line-height:18px;color:#666666" title="Privacy Notice" target="_blank">Privacy Notice</a> or <a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBDSTY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7G4b82DTFnnvWx6rX8j3JC43chzEK." style="font-family:Arial,&#39;Helvetica Neue&#39;,Helvetica,sans-serif;font-size:13px;line-height:18px;color:#666666" title="contact us" target="_blank">contact us</a> about it.</td>\n    </tr>\n    </table>\n    \n</td>\n</tr>\n\n\n</table>\n\n</center>\n</div>\n\n<br><img border="0" width="1" height="1" src="https://ifly.alaskaair.com/pub/as?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXHkMX%3Dw&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfPz96PE_FcRIpxY7mk83yFKElPDvg.">\n<br><img border="0" width="3" height="3" src="http://ib.adnxs.com/getuid?http://a.adrsp.net/dsp/ci/2/E4oydSZEby01MWk9aRsGBqcDKk_TJNlm1nCzxKMf_xV_4oThnwF_sjZ5Rhd559lD2rWl7oZVirY8e7kYt7tY0Paqru9SqkIApBbD/%24UID">\n\n\n</div>\n',
      text:
         '---------- Forwarded message ----------\nFrom: "Alaska Airlines" <service@ifly.alaskaair.com>\nDate: Jul 23, 2015 7:16 PM\nSubject: Check in Now for Your Flight to Portland, OR on Jul 24\nTo: <other@trailimage.com>\nCc:\n\n            Check In\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCUCY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOXmUsjU0ugRmgRAhJMNMF9a0fYOOUmyEC4y1-1tvBJQOgPAVUonb4NBPRyRoB1Pb0_Q_3Jyjk43FVAhXBG5fRRKkN7CR2wZi1-5J6O4nzUa-JfHFtuv7zDd_pcHfoHCu9YBWLqBNyJCDlbf24qW_rszlZygHTKSvIp_B6eQfUAF9rIZnGoDG7m1Cqag7VCbjgqWw.>\n& start your journey\n     Update Preferences\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCWWY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7ToPJevwldscDVAemZmKiUvcZzBTKgr0B3ZXz.>\n      [image: Alaska®]\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DSTTRWY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7k9-GInbvmvQsWi1_wRJJwi9ONZE.>\nHunter, you\'re missing out on miles.     Sign Up Today\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCYCY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7sBLOyBcvyZmRQB9lJargQq0NzpjRg8TXqejF.>\n [image: Checkin]\n     Start your trip now »\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCYWY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOXmUsjU0ugRmgRAhJMNMF9a0fYOOUmyEC4y1-1tvBJQOgPAVUonb4NBPRyRoB1Pb0_Q_3Jyjk43FVAhXBG5fRRKkN7CR2wZi1-5J6O4nzUa-JfHFtuv7zDd_pcHfoHCu8kG8O35DufWa05NwA3OPRiOrTBdGWkJZoOSsngG4sVe1B5VxKoHaERngI.>\n            Confirmation Code: OVSLUU\n   CHECK IN\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCWTY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOXmUsjU0ugRmgRAhJMNMF9a0fYOOUmyEC4y1-1tvBJQOgPAVUonb4NBPRyRoB1Pb0_Q_3Jyjk43FVAhXBG5fRRKkN7CR2wZi1-5J6O4nzUa-JfHFtuv7zDd_pcHfoHCubAIWShFs5rkvyEsj-7Qzrq5V-iAI3xN80VEkqjpECgGAF36DpjvDn8Fo6F6lfUhNCcN26Gd_A.>\n   Save time and check in online. Get started now.\n           Making Travel About You\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCARY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7X3c89Gi7X_jHcdPVHZY6KjaX0YH-EWlzPjN0Il6EAg.>\n• Check-in and Flight Status  • Electronic Boarding Pass  • Book Flights\nand Track Miles      DOWNLOAD APP\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCATY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7XJyBsFY-EHUVDnPf6Fe1pzaX0YH-EWlzPjN0Il4.>\n          Your Trip Details  Confirmation Code: OVSLUU  Boise  [image: text]\nPortland, OR  Jul 24, 2015\n   [image: Alaska]Seat  2307\n   Depart (BOI)Arrive (PDX)  6:45 PM7:02 PM\n   See Full Itinerary\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCAWY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOXmUsjU0ugRmgRAhJMNMF9a0fYOOUmyEC4y1-1tvBJQOgPAVUonb4NBPRyRoB1Pb0_Q_3Jyjk43FVAhXBG5fRRKkN7CR2wZi1-5J6O4nzUaVS1rCB_c8yESYKQytabJWUpI0AwkKcwCXgvGIPgmkGM9L0WU_Sk.>\n| Manage My Trip\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCAAY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOXmUsjU0ugRmgRAhJMNMF9a0fYOOUmyEC4y1-1tvBJQOgPAVUonb4NBPRyRoB1Pb0_Q_3Jyjk43FVAhXBG5fRRKkN7CR2wZi1-5J6O4nzUaN1D4Vex_tfGgcHgvkYBgk2twmVFvP28GdLbJ8DiyXs.>\nSpecial\nInformation  Operated by Horizon Air As Alaska Airlines\nCheck In with Alaska Airlines       [image: Get the Visa Signature® Card]\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCACY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7d0h4Ndqy85PlIGQm8EmdyGWpjGGDLi0.>\n  [image: Beyond Entertainment]\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCBRY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7S-sIN5CuFsQAsiMs-xmCHWM3uWL28B0xTD470VWd.>\n     Beyond Entertainment  Alaska Beyond™ Entertainment, lets you watch\npremium movies, TV shows, and more on your own device.    Download the\nPlayer »\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCBTY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7VeXM4w1Uw-10eSM9hzPrjGM3uWL28B0xTD470VWd.>\n\n       [image: Shop for Cars]\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCBWY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihaGKG7EVPLpN_Pg0D32k9nfOP2p9YwMolNT64QpCvxSzcsrasD85zzZWxtQ1Ym8YNuCiczay2Y9vAvuYzTVLoZvL7wIIuPwMtUc3SJOPESSndXbnhDT-4TGaFAYajfY2msOEbAM7yBc2oLvT3-aW3rIKlYySIpkQlcjQAB3y6edYF.>\n     Car Rental Deals  Book your car on alaskaair.com\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCYRY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m73Ay93QRZaaXQd9hsOZOtPaM3uWL28B0xTD470VWdfw.>\nand enjoy:   • Low Price Guarantee  • No Service Fees  • Earn Miles  • Free\nCancellation     Reserve Now »\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCBAY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihaGKG7EVPLpN_Pg0D32k9nfOP2p9YwMolNT64QpCvxSzcsrasD85zzZWxtQ1Ym8YNuCiczay2Y9vAvuYzTVLoZvL7wIIuPwMtUc3SJOPESSndXbnhDT-4TGaFAYajfY2msOEbAM7yBc2oLvT3-aW3rH-qqWp3I5Y6zyekxXlNZ0Xo.>\n\n        Book\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCBCY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7z6tX8zfnpCZbnpmknXNQaN1UONnkT1Bezg.>\n   Explore\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCCWY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7Ww2gZPxe2jEDlRmYS3XcZ11UONnkT1BeztoIew.>\n   Travel Info\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCCCY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7OapFFB7M_i0jj-XFmB_Hpx1UONnkT1BeztoIeA0lqM.>\n   Deals\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DSTTBAY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7Orc6ODUsGirB2bpCmUN5JN1UONnkT1Bezto.>\n     Stay in the Loop       [image: Facebook]\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCDAY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhX_hUCcCKdzLXGgZAL1b4iUl2g.>\n [image:\nTwitter]\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCDCY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhX_hUCcCKdzLXGgZAL1b4iUl2g.>\nBook\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCCTY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7LAR6DTqEIPkBdFdUhyi6r11UONnkT1Bezto.>\n /  Explore\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCCAY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7g4RAnPwON9V7wmqw35gKM11UONnkT1BeztoIeA0.>\n /  Travel Info\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCDRY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7fzzFqrvm47bH20XOUyhCTh1UONnkT1BeztoIeA0lq-Y.>\n /  Deals\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCDTY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m71cMvrP9f1QBE2ImccmJO_N1UONnkT1BeztoI.>\n   Mileage Plan™\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBDRRY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m747zb5tjs6kWdRyMWg1lHXWKGRVEAko6Pr5KeOIX85zWL.>\n /  My Account\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBDRTY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7ffjlAGhbmr2z5nzOyVnB4h1UONnkT1BeztoIeA0lqM.>\n /  Contact\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBDRWY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7KOSEeKZ39XNbtJiF5vT_iN1UONnkT1BeztoIeA0.>\nAdditional Resources and Information  This email was sent to\nother@trailimage.com.\nPlease read about our privacy policy\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DSTTDWY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7PMKF7InSczBHldun_V1SgadyrX1cYm7aj0.>\n.  To receive specials from your primary departure city,\nupdate your email settings\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBDRAY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7tE541EQfVcNwN55B27nY6UyosHjcAGG_itrQVslTf5w.>\n.  To edit your email address or subscriptions     UPDATE PREFERENCES\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCWAY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7gkuN3EvJF7mkcMze_g2cJUyosHjcAGG_itrQVslTf0.>\n    If\nyou no longer wish to receive Alaska\nAirlines promotional communications, you may unsubscribe\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBDRCY&_ei_=EolaGGF4SNMvxFF7KucKuWMX-doBKEYJmCiiTsj2JMv10EpqR-f_zk4gj5tKZvoXeum2A31spSQZHtQzzm-EF_UL0Tt8Xbtht6XRoDWMnNvQR6L1XNitPJ5VrI3RkirZ_zzyy3cBuSfTeFt65F0eVdoQJBa31ju4olhyaJr6540IpWXqNLKoQVGhJdNdrXpaNmioVQt0AM.>\n.\nYou may still receive transactional messages from Alaska Airlines.  Alaska\nAirlines, PO Box 68900, Seattle, WA 98168-0900.\n©2015 Alaska Airlines. All rights reserved.  View our Privacy Notice\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBDSRY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7lx1wn9pxAslVQFZ8D_9RMqdyrX1cYm7aj0.>\nor contact us\n<https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBDSTY&_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7G4b82DTFnnvWx6rX8j3JC43chzEK.>\nabout it.\n',
      textAsHtml:
         '<p>---------- Forwarded message ----------<br/>From: &quot;Alaska Airlines&quot; <a href="mailto:&lt;service@ifly.alaskaair.com">&lt;service@ifly.alaskaair.com</a>&gt;<br/>Date: Jul 23, 2015 7:16 PM<br/>Subject: Check in Now for Your Flight to Portland, OR on Jul 24<br/>To: <a href="mailto:&lt;other@trailimage.com">&lt;other@trailimage.com</a>&gt;<br/>Cc:</p><p>            Check In<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCUCY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOXmUsjU0ugRmgRAhJMNMF9a0fYOOUmyEC4y1-1tvBJQOgPAVUonb4NBPRyRoB1Pb0_Q_3Jyjk43FVAhXBG5fRRKkN7CR2wZi1-5J6O4nzUa-JfHFtuv7zDd_pcHfoHCu9YBWLqBNyJCDlbf24qW_rszlZygHTKSvIp_B6eQfUAF9rIZnGoDG7m1Cqag7VCbjgqWw.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCUCY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOXmUsjU0ugRmgRAhJMNMF9a0fYOOUmyEC4y1-1tvBJQOgPAVUonb4NBPRyRoB1Pb0_Q_3Jyjk43FVAhXBG5fRRKkN7CR2wZi1-5J6O4nzUa-JfHFtuv7zDd_pcHfoHCu9YBWLqBNyJCDlbf24qW_rszlZygHTKSvIp_B6eQfUAF9rIZnGoDG7m1Cqag7VCbjgqWw.&gt;</a><br/>&amp; start your journey<br/>     Update Preferences<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCWWY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7ToPJevwldscDVAemZmKiUvcZzBTKgr0B3ZXz.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCWWY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7ToPJevwldscDVAemZmKiUvcZzBTKgr0B3ZXz.&gt;</a><br/>      [image: Alaska&reg;]<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DSTTRWY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7k9-GInbvmvQsWi1_wRJJwi9ONZE.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DSTTRWY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7k9-GInbvmvQsWi1_wRJJwi9ONZE.&gt;</a><br/>Hunter, you&apos;re missing out on miles.     Sign Up Today<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCYCY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7sBLOyBcvyZmRQB9lJargQq0NzpjRg8TXqejF.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCYCY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7sBLOyBcvyZmRQB9lJargQq0NzpjRg8TXqejF.&gt;</a><br/> [image: Checkin]<br/>     Start your trip now &raquo;<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCYWY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOXmUsjU0ugRmgRAhJMNMF9a0fYOOUmyEC4y1-1tvBJQOgPAVUonb4NBPRyRoB1Pb0_Q_3Jyjk43FVAhXBG5fRRKkN7CR2wZi1-5J6O4nzUa-JfHFtuv7zDd_pcHfoHCu8kG8O35DufWa05NwA3OPRiOrTBdGWkJZoOSsngG4sVe1B5VxKoHaERngI.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCYWY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOXmUsjU0ugRmgRAhJMNMF9a0fYOOUmyEC4y1-1tvBJQOgPAVUonb4NBPRyRoB1Pb0_Q_3Jyjk43FVAhXBG5fRRKkN7CR2wZi1-5J6O4nzUa-JfHFtuv7zDd_pcHfoHCu8kG8O35DufWa05NwA3OPRiOrTBdGWkJZoOSsngG4sVe1B5VxKoHaERngI.&gt;</a><br/>            Confirmation Code: OVSLUU<br/>   CHECK IN<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCWTY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOXmUsjU0ugRmgRAhJMNMF9a0fYOOUmyEC4y1-1tvBJQOgPAVUonb4NBPRyRoB1Pb0_Q_3Jyjk43FVAhXBG5fRRKkN7CR2wZi1-5J6O4nzUa-JfHFtuv7zDd_pcHfoHCubAIWShFs5rkvyEsj-7Qzrq5V-iAI3xN80VEkqjpECgGAF36DpjvDn8Fo6F6lfUhNCcN26Gd_A.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCWTY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOXmUsjU0ugRmgRAhJMNMF9a0fYOOUmyEC4y1-1tvBJQOgPAVUonb4NBPRyRoB1Pb0_Q_3Jyjk43FVAhXBG5fRRKkN7CR2wZi1-5J6O4nzUa-JfHFtuv7zDd_pcHfoHCubAIWShFs5rkvyEsj-7Qzrq5V-iAI3xN80VEkqjpECgGAF36DpjvDn8Fo6F6lfUhNCcN26Gd_A.&gt;</a><br/>   Save time and check in online. Get started now.<br/>           Making Travel About You<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCARY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7X3c89Gi7X_jHcdPVHZY6KjaX0YH-EWlzPjN0Il6EAg.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCARY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7X3c89Gi7X_jHcdPVHZY6KjaX0YH-EWlzPjN0Il6EAg.&gt;</a><br/>&bull; Check-in and Flight Status  &bull; Electronic Boarding Pass  &bull; Book Flights<br/>and Track Miles      DOWNLOAD APP<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCATY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7XJyBsFY-EHUVDnPf6Fe1pzaX0YH-EWlzPjN0Il4.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCATY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7XJyBsFY-EHUVDnPf6Fe1pzaX0YH-EWlzPjN0Il4.&gt;</a><br/>          Your Trip Details  Confirmation Code: OVSLUU  Boise  [image: text]<br/>Portland, OR  Jul 24, 2015<br/>   [image: Alaska]Seat  2307<br/>   Depart (BOI)Arrive (PDX)  6:45 PM7:02 PM<br/>   See Full Itinerary<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCAWY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOXmUsjU0ugRmgRAhJMNMF9a0fYOOUmyEC4y1-1tvBJQOgPAVUonb4NBPRyRoB1Pb0_Q_3Jyjk43FVAhXBG5fRRKkN7CR2wZi1-5J6O4nzUaVS1rCB_c8yESYKQytabJWUpI0AwkKcwCXgvGIPgmkGM9L0WU_Sk.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCAWY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOXmUsjU0ugRmgRAhJMNMF9a0fYOOUmyEC4y1-1tvBJQOgPAVUonb4NBPRyRoB1Pb0_Q_3Jyjk43FVAhXBG5fRRKkN7CR2wZi1-5J6O4nzUaVS1rCB_c8yESYKQytabJWUpI0AwkKcwCXgvGIPgmkGM9L0WU_Sk.&gt;</a><br/>| Manage My Trip<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCAAY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOXmUsjU0ugRmgRAhJMNMF9a0fYOOUmyEC4y1-1tvBJQOgPAVUonb4NBPRyRoB1Pb0_Q_3Jyjk43FVAhXBG5fRRKkN7CR2wZi1-5J6O4nzUaN1D4Vex_tfGgcHgvkYBgk2twmVFvP28GdLbJ8DiyXs.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCAAY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOXmUsjU0ugRmgRAhJMNMF9a0fYOOUmyEC4y1-1tvBJQOgPAVUonb4NBPRyRoB1Pb0_Q_3Jyjk43FVAhXBG5fRRKkN7CR2wZi1-5J6O4nzUaN1D4Vex_tfGgcHgvkYBgk2twmVFvP28GdLbJ8DiyXs.&gt;</a><br/>Special<br/>Information  Operated by Horizon Air As Alaska Airlines<br/>Check In with Alaska Airlines       [image: Get the Visa Signature&reg; Card]<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCACY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7d0h4Ndqy85PlIGQm8EmdyGWpjGGDLi0.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCACY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7d0h4Ndqy85PlIGQm8EmdyGWpjGGDLi0.&gt;</a><br/>  [image: Beyond Entertainment]<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCBRY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7S-sIN5CuFsQAsiMs-xmCHWM3uWL28B0xTD470VWd.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCBRY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7S-sIN5CuFsQAsiMs-xmCHWM3uWL28B0xTD470VWd.&gt;</a><br/>     Beyond Entertainment  Alaska Beyond&trade; Entertainment, lets you watch<br/>premium movies, TV shows, and more on your own device.    Download the<br/>Player &raquo;<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCBTY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7VeXM4w1Uw-10eSM9hzPrjGM3uWL28B0xTD470VWd.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCBTY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7VeXM4w1Uw-10eSM9hzPrjGM3uWL28B0xTD470VWd.&gt;</a></p><p>       [image: Shop for Cars]<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCBWY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihaGKG7EVPLpN_Pg0D32k9nfOP2p9YwMolNT64QpCvxSzcsrasD85zzZWxtQ1Ym8YNuCiczay2Y9vAvuYzTVLoZvL7wIIuPwMtUc3SJOPESSndXbnhDT-4TGaFAYajfY2msOEbAM7yBc2oLvT3-aW3rIKlYySIpkQlcjQAB3y6edYF.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCBWY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihaGKG7EVPLpN_Pg0D32k9nfOP2p9YwMolNT64QpCvxSzcsrasD85zzZWxtQ1Ym8YNuCiczay2Y9vAvuYzTVLoZvL7wIIuPwMtUc3SJOPESSndXbnhDT-4TGaFAYajfY2msOEbAM7yBc2oLvT3-aW3rIKlYySIpkQlcjQAB3y6edYF.&gt;</a><br/>     Car Rental Deals  Book your car on <a href="http://alaskaair.com">alaskaair.com</a><br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCYRY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m73Ay93QRZaaXQd9hsOZOtPaM3uWL28B0xTD470VWdfw.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCYRY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m73Ay93QRZaaXQd9hsOZOtPaM3uWL28B0xTD470VWdfw.&gt;</a><br/>and enjoy:   &bull; Low Price Guarantee  &bull; No Service Fees  &bull; Earn Miles  &bull; Free<br/>Cancellation     Reserve Now &raquo;<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCBAY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihaGKG7EVPLpN_Pg0D32k9nfOP2p9YwMolNT64QpCvxSzcsrasD85zzZWxtQ1Ym8YNuCiczay2Y9vAvuYzTVLoZvL7wIIuPwMtUc3SJOPESSndXbnhDT-4TGaFAYajfY2msOEbAM7yBc2oLvT3-aW3rH-qqWp3I5Y6zyekxXlNZ0Xo.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCBAY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihaGKG7EVPLpN_Pg0D32k9nfOP2p9YwMolNT64QpCvxSzcsrasD85zzZWxtQ1Ym8YNuCiczay2Y9vAvuYzTVLoZvL7wIIuPwMtUc3SJOPESSndXbnhDT-4TGaFAYajfY2msOEbAM7yBc2oLvT3-aW3rH-qqWp3I5Y6zyekxXlNZ0Xo.&gt;</a></p><p>        Book<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCBCY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7z6tX8zfnpCZbnpmknXNQaN1UONnkT1Bezg.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCBCY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7z6tX8zfnpCZbnpmknXNQaN1UONnkT1Bezg.&gt;</a><br/>   Explore<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCCWY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7Ww2gZPxe2jEDlRmYS3XcZ11UONnkT1BeztoIew.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCCWY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7Ww2gZPxe2jEDlRmYS3XcZ11UONnkT1BeztoIew.&gt;</a><br/>   Travel Info<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCCCY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7OapFFB7M_i0jj-XFmB_Hpx1UONnkT1BeztoIeA0lqM.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCCCY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7OapFFB7M_i0jj-XFmB_Hpx1UONnkT1BeztoIeA0lqM.&gt;</a><br/>   Deals<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DSTTBAY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7Orc6ODUsGirB2bpCmUN5JN1UONnkT1Bezto.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DSTTBAY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7Orc6ODUsGirB2bpCmUN5JN1UONnkT1Bezto.&gt;</a><br/>     Stay in the Loop       [image: Facebook]<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCDAY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhX_hUCcCKdzLXGgZAL1b4iUl2g.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCDAY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhX_hUCcCKdzLXGgZAL1b4iUl2g.&gt;</a><br/> [image:<br/>Twitter]<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCDCY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhX_hUCcCKdzLXGgZAL1b4iUl2g.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCDCY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhX_hUCcCKdzLXGgZAL1b4iUl2g.&gt;</a><br/>Book<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCCTY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7LAR6DTqEIPkBdFdUhyi6r11UONnkT1Bezto.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCCTY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7LAR6DTqEIPkBdFdUhyi6r11UONnkT1Bezto.&gt;</a><br/> /  Explore<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCCAY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7g4RAnPwON9V7wmqw35gKM11UONnkT1BeztoIeA0.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCCAY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7g4RAnPwON9V7wmqw35gKM11UONnkT1BeztoIeA0.&gt;</a><br/> /  Travel Info<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCDRY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7fzzFqrvm47bH20XOUyhCTh1UONnkT1BeztoIeA0lq-Y.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCDRY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7fzzFqrvm47bH20XOUyhCTh1UONnkT1BeztoIeA0lq-Y.&gt;</a><br/> /  Deals<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCDTY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m71cMvrP9f1QBE2ImccmJO_N1UONnkT1BeztoI.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCDTY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m71cMvrP9f1QBE2ImccmJO_N1UONnkT1BeztoI.&gt;</a><br/>   Mileage Plan&trade;<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBDRRY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m747zb5tjs6kWdRyMWg1lHXWKGRVEAko6Pr5KeOIX85zWL.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBDRRY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m747zb5tjs6kWdRyMWg1lHXWKGRVEAko6Pr5KeOIX85zWL.&gt;</a><br/> /  My Account<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBDRTY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7ffjlAGhbmr2z5nzOyVnB4h1UONnkT1BeztoIeA0lqM.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBDRTY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7ffjlAGhbmr2z5nzOyVnB4h1UONnkT1BeztoIeA0lqM.&gt;</a><br/> /  Contact<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBDRWY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7KOSEeKZ39XNbtJiF5vT_iN1UONnkT1BeztoIeA0.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBDRWY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7KOSEeKZ39XNbtJiF5vT_iN1UONnkT1BeztoIeA0.&gt;</a><br/>Additional Resources and Information  This email was sent to<br/><a href="mailto:other@trailimage.com">other@trailimage.com</a>.<br/>Please read about our privacy policy<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DSTTDWY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7PMKF7InSczBHldun_V1SgadyrX1cYm7aj0.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DSTTDWY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7PMKF7InSczBHldun_V1SgadyrX1cYm7aj0.&gt;</a><br/>.  To receive specials from your primary departure city,<br/>update your email settings<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBDRAY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7tE541EQfVcNwN55B27nY6UyosHjcAGG_itrQVslTf5w.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBDRAY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7tE541EQfVcNwN55B27nY6UyosHjcAGG_itrQVslTf5w.&gt;</a><br/>.  To edit your email address or subscriptions     UPDATE PREFERENCES<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCWAY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7gkuN3EvJF7mkcMze_g2cJUyosHjcAGG_itrQVslTf0.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBCWAY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7gkuN3EvJF7mkcMze_g2cJUyosHjcAGG_itrQVslTf0.&gt;</a><br/>    If<br/>you no longer wish to receive Alaska<br/>Airlines promotional communications, you may unsubscribe<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBDRCY&amp;_ei_=EolaGGF4SNMvxFF7KucKuWMX-doBKEYJmCiiTsj2JMv10EpqR-f_zk4gj5tKZvoXeum2A31spSQZHtQzzm-EF_UL0Tt8Xbtht6XRoDWMnNvQR6L1XNitPJ5VrI3RkirZ_zzyy3cBuSfTeFt65F0eVdoQJBa31ju4olhyaJr6540IpWXqNLKoQVGhJdNdrXpaNmioVQt0AM.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBDRCY&amp;_ei_=EolaGGF4SNMvxFF7KucKuWMX-doBKEYJmCiiTsj2JMv10EpqR-f_zk4gj5tKZvoXeum2A31spSQZHtQzzm-EF_UL0Tt8Xbtht6XRoDWMnNvQR6L1XNitPJ5VrI3RkirZ_zzyy3cBuSfTeFt65F0eVdoQJBa31ju4olhyaJr6540IpWXqNLKoQVGhJdNdrXpaNmioVQt0AM.&gt;</a><br/>.<br/>You may still receive transactional messages from Alaska Airlines.  Alaska<br/>Airlines, PO Box 68900, Seattle, WA 98168-0900.<br/>&copy;2015 Alaska Airlines. All rights reserved.  View our Privacy Notice<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBDSRY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7lx1wn9pxAslVQFZ8D_9RMqdyrX1cYm7aj0.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBDSRY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7lx1wn9pxAslVQFZ8D_9RMqdyrX1cYm7aj0.&gt;</a><br/>or contact us<br/>&lt;<a href="https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBDSTY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7G4b82DTFnnvWx6rX8j3JC43chzEK.&gt;">https://ifly.alaskaair.com/pub/cc?_ri_=X0Gzc2X%3DWQpglLjHJlYQGNGwaBqhyd6e4czfGcSPO00zeluMowkEY3cqzaqVXtpKX%3DCBDSTY&amp;_ei_=ErnqQQciIpy-rHXQoqyVvZMn-4UkSN2VkhcqizYDwcvsRSJ3-1tU8WTPt84bC9nGzvqE3ZfYLQPaQEtj8umfAfOxnetZw2JXPrRi7q9pChihgs_XyegioFsCg8g5WFVmReNn2035AcgIhZMa_CAhhXY9P2IoTmM_JDx6NqV9f_m7G4b82DTFnnvWx6rX8j3JC43chzEK.&gt;</a><br/>about it.</p>',
      subject: 'Fwd: Check in Now for Your Flight to Portland, OR on Jul 24',
      references: '<0.0.1F.555.1D0C5AE4E36C40C.0@omptrans.ifly.alaskaair.com>',
      date: '2015-07-24T23:27:02.000Z',
      to: {
         value: [{ address: 'self@trailimage.com', name: 'Self Person' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Self Person</span> &lt;<a href="mailto:self@trailimage.com" class="mp_address_email">self@trailimage.com</a>&gt;</span>',
         text: 'Self Person <self@trailimage.com>'
      },
      from: {
         value: [{ address: 'other@trailimage.com', name: 'Other Person' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Other Person</span> &lt;<a href="mailto:other@trailimage.com" class="mp_address_email">other@trailimage.com</a>&gt;</span>',
         text: 'Other Person <other@trailimage.com>'
      },
      messageId:
         '<CAAAYr2bDuh463mX6NBSMqGQb8A86B0Pg9+M__sQnJHMuMfnA=Q@mail.gmail.com>',
      inReplyTo: '<0.0.1F.555.1D0C5AE4E36C40C.0@omptrans.ifly.alaskaair.com>'
   },
   {
      attachments: [],
      headers: {},
      headerLines: [
         { key: 'x-gm-thrid', line: 'X-GM-THRID: 1432129257765306228' },
         {
            key: 'x-gmail-labels',
            line: 'X-Gmail-Labels: Archived,Important,Family/Jessica'
         },
         { key: 'delivered-to', line: 'Delivered-To: self@trailimage.com' },
         {
            key: 'received',
            line:
               'Received: by 10.49.63.166 with SMTP id h6csp70234qes;\r\n        Fri, 12 Apr 2013 09:41:31 -0700 (PDT)'
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 10.236.116.164 with SMTP id g24mr7075606yhh.178.1365784891171;\r\n        Fri, 12 Apr 2013 09:41:31 -0700 (PDT)'
         },
         {
            key: 'return-path',
            line: 'Return-Path: <Other.Person@wellsfargo.com>'
         },
         {
            key: 'received',
            line:
               'Received: from mxdcmx01e.wellsfargo.com (mxdcmx01e.wellsfargo.com. [167.138.239.98])\r\n        by mx.google.com with ESMTPS id o27si5672662yhn.7.2013.04.12.09.41.31\r\n        (version=TLSv1 cipher=RC4-SHA bits=128/128);\r\n        Fri, 12 Apr 2013 09:41:31 -0700 (PDT)'
         },
         {
            key: 'received-spf',
            line:
               'Received-SPF: pass (google.com: domain of Other.Person@wellsfargo.com designates 167.138.239.98 as permitted sender) client-ip=167.138.239.98;'
         },
         {
            key: 'authentication-results',
            line:
               'Authentication-Results: mx.google.com;\r\n       spf=pass (google.com: domain of Other.Person@wellsfargo.com designates 167.138.239.98 as permitted sender) smtp.mail=Other.Person@wellsfargo.com;\r\n       dkim=pass header.i=@wellsfargo.com'
         },
         {
            key: 'received',
            line:
               'Received: from mxicmv01.wellsfargo.com (mxicmv01.wellsfargo.com [10.91.24.71])\r\n\tby mxdcmx01e.wellsfargo.com (Sentrion-MTA-4.2.2/Sentrion-MTA-4.2.2) with ESMTP id r3CGfU4H020454\r\n\t(version=TLSv1/SSLv3 cipher=DHE-RSA-AES256-SHA bits=256 verify=FAIL)\r\n\tfor <self@trailimage.com>; Fri, 12 Apr 2013 16:41:30 GMT'
         },
         {
            key: 'dkim-signature',
            line:
               'DKIM-Signature: v=1; a=rsa-sha256; c=simple/simple; d=wellsfargo.com;\r\n\ts=2011-05-wfb; t=1365784890;\r\n\tbh=6jdLSstEtBROsl43SPyMbexFbX6FnF+qQvm3nctm9Yo=;\r\n\th=From:To:Subject:Date:Message-ID:Content-Type:MIME-Version;\r\n\tb=vxRJJY3OidGaOyVC3leatsOCKWQh7FfvO1cZ3Vx5utcDaVxzdz+/MX6+ZRbopXlNw\r\n\t kZ1Y48EsGSmvYOBIX2n9sxwCtB8wiM8GUJmgwxrKZlQ0vjOS5M4S1O6j92UXWpZ9Le\r\n\t HQrjymWRJn+t7l+V1tWEqM9XNyeG2n11M8tyVQR8='
         },
         {
            key: 'received',
            line:
               'Received: from MSGEXOXM7112.ent.wfb.bank.corp (msgexoxm7112.wellsfargo.com [162.102.156.107])\r\n\tby mxicmv01.wellsfargo.com (Sentrion-MTA-4.2.2/Sentrion-MTA-4.2.2) with ESMTP id r3CGfT4Q005956\r\n\tfor <self@trailimage.com>; Fri, 12 Apr 2013 16:41:29 GMT'
         },
         {
            key: 'received',
            line:
               'Received: from MSGEXOXM1106.ent.wfb.bank.corp ([169.254.6.17]) by\r\n MSGEXOXM7112.ent.wfb.bank.corp ([162.102.156.107]) with mapi id\r\n 14.02.0328.009; Fri, 12 Apr 2013 11:41:23 -0500'
         },
         { key: 'from', line: 'From: <Other.Person@wellsfargo.com>' },
         { key: 'to', line: 'To: <self@trailimage.com>' },
         { key: 'subject', line: 'Subject: home' },
         { key: 'thread-topic', line: 'Thread-Topic: home' },
         {
            key: 'thread-index',
            line: 'Thread-Index: Ac43nILnKGcpgU9QR6C/D9Isu+iW4A=='
         },
         { key: 'date', line: 'Date: Fri, 12 Apr 2013 16:41:17 +0000' },
         {
            key: 'message-id',
            line:
               'Message-ID: <CBF6CF7C253D234B9A0144F6628C29CD02187B@MSGEXOXM1106.ent.wfb.bank.corp>'
         },
         { key: 'accept-language', line: 'Accept-Language: en-US' },
         { key: 'content-language', line: 'Content-Language: en-US' },
         { key: 'x-ms-has-attach', line: 'X-MS-Has-Attach:' },
         { key: 'x-ms-tnef-correlator', line: 'X-MS-TNEF-Correlator:' },
         {
            key: 'x-originating-ip',
            line: 'x-originating-ip: [167.138.188.148]'
         },
         {
            key: 'content-type',
            line:
               'Content-Type: multipart/alternative;\r\n\tboundary="_000_CBF6CF7C253D234B9A0144F6628C29CD02187BMSGEXOXM1106entwf_"'
         },
         { key: 'mime-version', line: 'MIME-Version: 1.0' }
      ],
      html:
         '<html xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns:m="http://schemas.microsoft.com/office/2004/12/omml" xmlns="http://www.w3.org/TR/REC-html40">\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=us-ascii">\n<meta name="Generator" content="Microsoft Word 14 (filtered medium)">\n<style><!--\n/* Font Definitions */\n@font-face\n\t{font-family:Calibri;\n\tpanose-1:2 15 5 2 2 2 4 3 2 4;}\n@font-face\n\t{font-family:Verdana;\n\tpanose-1:2 11 6 4 3 5 4 4 2 4;}\n/* Style Definitions */\np.MsoNormal, li.MsoNormal, div.MsoNormal\n\t{margin:0in;\n\tmargin-bottom:.0001pt;\n\tfont-size:11.0pt;\n\tfont-family:"Calibri","sans-serif";}\na:link, span.MsoHyperlink\n\t{mso-style-priority:99;\n\tcolor:blue;\n\ttext-decoration:underline;}\na:visited, span.MsoHyperlinkFollowed\n\t{mso-style-priority:99;\n\tcolor:purple;\n\ttext-decoration:underline;}\nspan.EmailStyle17\n\t{mso-style-type:personal-compose;\n\tfont-family:"Calibri","sans-serif";\n\tcolor:windowtext;}\n.MsoChpDefault\n\t{mso-style-type:export-only;\n\tfont-family:"Calibri","sans-serif";}\n@page WordSection1\n\t{size:8.5in 11.0in;\n\tmargin:1.0in 1.0in 1.0in 1.0in;}\ndiv.WordSection1\n\t{page:WordSection1;}\n--></style><!--[if gte mso 9]><xml>\n<o:shapedefaults v:ext="edit" spidmax="1026" />\n</xml><![endif]--><!--[if gte mso 9]><xml>\n<o:shapelayout v:ext="edit">\n<o:idmap v:ext="edit" data="1" />\n</o:shapelayout></xml><![endif]-->\n</head>\n<body lang="EN-US" link="blue" vlink="purple">\n<div class="WordSection1">\n<p class="MsoNormal">About to head to the doctors for shots, then will deposit and be home<o:p></o:p></p>\n<p class="MsoNormal"><o:p>&nbsp;</o:p></p>\n<p class="MsoNormal"><span style="font-size:10.0pt;font-family:&quot;Verdana&quot;,&quot;sans-serif&quot;">Jessica Wright-Abbott</span><span style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><o:p></o:p></span></p>\n<p class="MsoNormal"><span style="font-size:7.5pt;font-family:&quot;Verdana&quot;,&quot;sans-serif&quot;">Loan Servicing Specialist</span><span style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><o:p></o:p></span></p>\n<p class="MsoNormal"><span style="font-size:7.5pt;font-family:&quot;Verdana&quot;,&quot;sans-serif&quot;">Credit Management Group-Idaho</span><span style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><o:p></o:p></span></p>\n<p class="MsoNormal"><span style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">&nbsp;<o:p></o:p></span></p>\n<p class="MsoNormal"><span style="font-size:7.5pt;font-family:&quot;Verdana&quot;,&quot;sans-serif&quot;;color:gray">Wells Fargo Bank, N.A.&nbsp;</span><span style="font-size:8.0pt;font-family:&quot;Verdana&quot;,&quot;sans-serif&quot;;color:gray">|</span><span style="font-size:7.5pt;font-family:&quot;Verdana&quot;,&quot;sans-serif&quot;;color:gray">\n 3295 Elder Street&nbsp;</span><span style="font-size:8.0pt;font-family:&quot;Verdana&quot;,&quot;sans-serif&quot;;color:gray">|</span><span style="font-size:7.5pt;font-family:&quot;Verdana&quot;,&quot;sans-serif&quot;;color:gray"> Boise, Id.83705\n</span><span style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><o:p></o:p></span></p>\n<p class="MsoNormal"><span style="font-size:7.5pt;font-family:&quot;Verdana&quot;,&quot;sans-serif&quot;;color:gray">MacU1853-033&nbsp;</span><span style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><o:p></o:p></span></p>\n<p class="MsoNormal"><span style="font-size:7.5pt;font-family:&quot;Verdana&quot;,&quot;sans-serif&quot;;color:gray">Tel: 208-393-4127&nbsp;</span><span style="font-size:8.0pt;font-family:&quot;Verdana&quot;,&quot;sans-serif&quot;;color:gray">|</span><span style="font-size:7.5pt;font-family:&quot;Verdana&quot;,&quot;sans-serif&quot;;color:gray">\n Fax: 208-393-4489</span><span style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><o:p></o:p></span></p>\n<p class="MsoNormal"><span style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">&nbsp;<o:p></o:p></span></p>\n<p class="MsoNormal"><span style="font-size:7.5pt;font-family:&quot;Verdana&quot;,&quot;sans-serif&quot;;color:gray"><a href="mailto:jessica.l.wright@wellsfargo.com"><span style="color:blue">jessica.l.wright@wellsfargo.com</span></a></span><span style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;"><o:p></o:p></span></p>\n<p class="MsoNormal"><span style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">&nbsp;<o:p></o:p></span></p>\n<p class="MsoNormal" style="margin-bottom:10.0pt;line-height:115%"><span style="font-size:8.0pt;line-height:115%;font-family:&quot;Verdana&quot;,&quot;sans-serif&quot;;color:gray">&quot;This message may contain confidential and/or privileged information. If you are not the addressee\n or authorized to receive this for the addressee, you must not use, copy, disclose, or take any action based on this message or any information herein. If you have received this message in error, please advise the sender immediately by reply e-mail and delete\n this message. Thank you for your cooperation.&#8221;<o:p></o:p></span></p>\n<p class="MsoNormal"><span style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">&nbsp;<o:p></o:p></span></p>\n<p class="MsoNormal"><span style="font-size:12.0pt;font-family:&quot;Times New Roman&quot;,&quot;serif&quot;">&nbsp;</span><o:p></o:p></p>\n</div>\n</body>\n</html>\n',
      text:
         'About to head to the doctors for shots, then will deposit and be home\n\nJessica Wright-Abbott\nLoan Servicing Specialist\nCredit Management Group-Idaho\n\nWells Fargo Bank, N.A. | 3295 Elder Street | Boise, Id.83705\nMacU1853-033\nTel: 208-393-4127 | Fax: 208-393-4489\n\nOther.Person@wellsfargo.com<mailto:Other.Person@wellsfargo.com>\n\n"This message may contain confidential and/or privileged information. If you are not the addressee or authorized to receive this for the addressee, you must not use, copy, disclose, or take any action based on this message or any information herein. If you have received this message in error, please advise the sender immediately by reply e-mail and delete this message. Thank you for your cooperation."\n\n\n',
      textAsHtml:
         '<p>About to head to the doctors for shots, then will deposit and be home</p><p>Jessica Wright-Abbott<br/>Loan Servicing Specialist<br/>Credit Management Group-Idaho</p><p>Wells Fargo Bank, N.A. | 3295 Elder Street | Boise, Id.83705<br/>MacU1853-033<br/>Tel: 208-393-4127 | Fax: 208-393-4489</p><p><a href="mailto:Other.Person@wellsfargo.com">Other.Person@wellsfargo.com</a><a href="mailto:&lt;mailto:Other.Person@wellsfargo.com">&lt;mailto:Other.Person@wellsfargo.com</a>&gt;</p><p>&quot;This message may contain confidential and/or privileged information. If you are not the addressee or authorized to receive this for the addressee, you must not use, copy, disclose, or take any action based on this message or any information herein. If you have received this message in error, please advise the sender immediately by reply e-mail and delete this message. Thank you for your cooperation.&quot;</p>',
      subject: 'home',
      date: '2013-04-12T16:41:17.000Z',
      to: {
         value: [{ address: 'self@trailimage.com', name: '' }],
         html:
            '<span class="mp_address_group"><a href="mailto:self@trailimage.com" class="mp_address_email">self@trailimage.com</a></span>',
         text: 'self@trailimage.com'
      },
      from: {
         value: [{ address: 'Other.Person@wellsfargo.com', name: '' }],
         html:
            '<span class="mp_address_group"><a href="mailto:Other.Person@wellsfargo.com" class="mp_address_email">Other.Person@wellsfargo.com</a></span>',
         text: 'Other.Person@wellsfargo.com'
      },
      messageId:
         '<CBF6CF7C253D234B9A0144F6628C29CD02187B@MSGEXOXM1106.ent.wfb.bank.corp>'
   },
   {
      attachments: [],
      headers: {},
      headerLines: [
         { key: 'x-gm-thrid', line: 'X-GM-THRID: 1560607108378939026' },
         {
            key: 'x-gmail-labels',
            line: 'X-Gmail-Labels: Inbox,Important,Family/Jessica'
         },
         { key: 'delivered-to', line: 'Delivered-To: self@trailimage.com' },
         {
            key: 'received',
            line:
               'Received: by 10.28.199.3 with SMTP id x3csp695998wmf;\r\n        Tue, 28 Feb 2017 14:46:37 -0800 (PST)'
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 10.202.51.10 with SMTP id z10mr2605712oiz.214.1488321996966;\r\n        Tue, 28 Feb 2017 14:46:36 -0800 (PST)'
         },
         { key: 'return-path', line: 'Return-Path: <other@trailimage.com>' },
         {
            key: 'received',
            line:
               'Received: from mail-oi0-x22c.google.com (mail-oi0-x22c.google.com. [2607:f8b0:4003:c06::22c])\r\n        by mx.google.com with ESMTPS id s67si1328849oig.178.2017.02.28.14.46.36\r\n        for <self@trailimage.com>\r\n        (version=TLS1_2 cipher=ECDHE-RSA-AES128-GCM-SHA256 bits=128/128);\r\n        Tue, 28 Feb 2017 14:46:36 -0800 (PST)'
         },
         {
            key: 'received-spf',
            line:
               'Received-SPF: neutral (google.com: 2607:f8b0:4003:c06::22c is neither permitted nor denied by best guess record for domain of other@trailimage.com) client-ip=2607:f8b0:4003:c06::22c;'
         },
         {
            key: 'authentication-results',
            line:
               'Authentication-Results: mx.google.com;\r\n       dkim=pass header.i=@trailimage-com.20150623.gappssmtp.com;\r\n       spf=neutral (google.com: 2607:f8b0:4003:c06::22c is neither permitted nor denied by best guess record for domain of other@trailimage.com) smtp.mailfrom=other@trailimage.com'
         },
         {
            key: 'received',
            line:
               'Received: by mail-oi0-x22c.google.com with SMTP id 62so13714047oih.2\r\n        for <self@trailimage.com>; Tue, 28 Feb 2017 14:46:36 -0800 (PST)'
         },
         {
            key: 'dkim-signature',
            line:
               'DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=trailimage-com.20150623.gappssmtp.com; s=20150623;\r\n        h=mime-version:in-reply-to:references:from:date:message-id:subject:to;\r\n        bh=N4GNjtMdFhl5mCQCYTOdLjGQWWSFUj/KSNCcvDs9yIM=;\r\n        b=zQm/vrGQbCNKxK1gRCnUt9MsDYfuaJfHoyijeCBMU/UQ8DT5SRHswRGmmz6jM5BsQ/\r\n         1avGr0INFNEboGnStkBDxLd5dLwxVr67DFSaQDU6rQWQdnyuV8EHoHLCuAmEAaJwHmoS\r\n         bqVrXz2SwV/5Xi0t5FF7ecde/DJE4AZSbtAZTpAPWjvqtuQ7KDOKOxHIswq/HdxykDzR\r\n         uo+oJOwLjeKIFSAdyxTDGc/fSZDcCNWBf3tpHDb7/wdQffbfMFp5mzJnXckZy0jRP9t7\r\n         35ETvRezS4aWC8AGcJNsWdn6azSvVolj/POshoOc3fmhd5NQ9VM1Ese9dYb/ZjIgV88p\r\n         UK+w=='
         },
         {
            key: 'x-google-dkim-signature',
            line:
               'X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=1e100.net; s=20161025;\r\n        h=x-gm-message-state:mime-version:in-reply-to:references:from:date\r\n         :message-id:subject:to;\r\n        bh=N4GNjtMdFhl5mCQCYTOdLjGQWWSFUj/KSNCcvDs9yIM=;\r\n        b=Lv71jT0BiDraK0rkjMenYZQDFNB4Yxl1pJEnBYB7py5cpq4DYL86WQ3+/+VRhtHLQI\r\n         Mg2PfKm/nlqT1FZTEjPbGJo8wDwy0VvrYlQsvxoRdXbZ3tQfeRweWfbSdtF/d0Ca5hHW\r\n         7iji1NivkE1gx8OqVu404VHASFow5JUDN30u5VUHAhk322EhueCeBEjlCwdIuYXoxRh1\r\n         ilbkA2GoJWZ4/JMWrYjQARXWefhMx3ppWecj+rmc2iHmTToGsQJVqWfnLlQ4UJC2Rsgr\r\n         CLrVhVCkvzWJ4nXGFw4CKZOzLpQl4vyaAnqI3zuSDAM58u92NBtl2bemL3lP3oMwaS0o\r\n         5ktQ=='
         },
         {
            key: 'x-gm-message-state',
            line:
               'X-Gm-Message-State: AMke39nCd3hNFo2wOXU3T0zzvoBR3QUBvw9uiEkrvJYSiYz/tvTMM0E9Uwy21jm9LpitKhwwuMRciP/PvfEaQA=='
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 10.202.108.212 with SMTP id h203mr2647537oic.129.1488321996398;\r\n Tue, 28 Feb 2017 14:46:36 -0800 (PST)'
         },
         { key: 'mime-version', line: 'MIME-Version: 1.0' },
         {
            key: 'received',
            line:
               'Received: by 10.157.50.11 with HTTP; Tue, 28 Feb 2017 14:46:35 -0800 (PST)'
         },
         {
            key: 'x-originating-ip',
            line: 'X-Originating-IP: [2600:100e:b108:323a:9cc2:dc12:c071:443d]'
         },
         {
            key: 'received',
            line:
               'Received: by 10.157.50.11 with HTTP; Tue, 28 Feb 2017 14:46:35 -0800 (PST)'
         },
         {
            key: 'in-reply-to',
            line:
               'In-Reply-To: <CAH8Y112dv3T7zH5-AqJPpER_Ur=vnpT0amVvS1wRE_yVQ-=kow@mail.gmail.com>'
         },
         {
            key: 'references',
            line:
               'References: <CAH8Y112dv3T7zH5-AqJPpER_Ur=vnpT0amVvS1wRE_yVQ-=kow@mail.gmail.com>'
         },
         { key: 'from', line: 'From: Other Person <other@trailimage.com>' },
         { key: 'date', line: 'Date: Tue, 28 Feb 2017 15:46:35 -0700' },
         {
            key: 'message-id',
            line:
               'Message-ID: <CAAAYr2ZWbn3vaF9YTZg+-1oxHqU8Q6SFczf8gUwqBasUNWKvSg@mail.gmail.com>'
         },
         { key: 'subject', line: 'Subject: Fwd: field trips' },
         { key: 'to', line: 'To: Dad <self@trailimage.com>' },
         {
            key: 'content-type',
            line:
               'Content-Type: multipart/alternative; boundary=001a1142ef38e83cb805499ef7c6'
         }
      ],
      html:
         '<div dir="auto"></div><div class="gmail_quote">---------- Forwarded message ----------<br>From: &quot;Michael Kuntz&quot; &lt;<a href="mailto:mike.kuntz@boiseschools.org">mike.kuntz@boiseschools.org</a>&gt;<br>Date: Feb 28, 2017 12:41 PM<br>Subject: field trips<br>To: &quot;MICHAEL KUNTZ&quot; &lt;<a href="mailto:mike.kuntz@boiseschools.org">mike.kuntz@boiseschools.org</a>&gt;<br>Cc: <br><br type="attribution"><div dir="ltr">Hi Parents,<div>   OK...one field trip on short notice and another in the not-so-distant future that I hope you can save the date and join us! Tomorrow we are going to the Capitol Building from 9:30 to noon.  We will be back in time for lunch.  You are welcom to join us on the bus, or meet up with us at the Capitol.  </div><div>     The other trip is on Tuesday, May 30.  That&#39;s right.....you get 3 months notice! Our class will hike up to Table Rock in the morning, pack a lunch and eat at Quarry Park, then take a parent-guided scavenger hunt through the Old Penitentiary in the afternoon.  I invite you to join us for the entire day, but would love to have you for the morning OR afternoon if that works better!</div><div>     We do have another field trip in May to the Basque Museum and City Hall, but the date is not yet set.</div><div>Thanks!</div><div>Mike  </div></div>\n</div>\n',
      text:
         '---------- Forwarded message ----------\nFrom: "Michael Kuntz" <mike.kuntz@boiseschools.org>\nDate: Feb 28, 2017 12:41 PM\nSubject: field trips\nTo: "MICHAEL KUNTZ" <mike.kuntz@boiseschools.org>\nCc:\n\nHi Parents,\n   OK...one field trip on short notice and another in the not-so-distant\nfuture that I hope you can save the date and join us! Tomorrow we are going\nto the Capitol Building from 9:30 to noon.  We will be back in time for\nlunch.  You are welcom to join us on the bus, or meet up with us at the\nCapitol.\n     The other trip is on Tuesday, May 30.  That\'s right.....you get 3\nmonths notice! Our class will hike up to Table Rock in the morning, pack a\nlunch and eat at Quarry Park, then take a parent-guided scavenger hunt\nthrough the Old Penitentiary in the afternoon.  I invite you to join us for\nthe entire day, but would love to have you for the morning OR afternoon if\nthat works better!\n     We do have another field trip in May to the Basque Museum and City\nHall, but the date is not yet set.\nThanks!\nMike\n',
      textAsHtml:
         '<p>---------- Forwarded message ----------<br/>From: &quot;Michael Kuntz&quot; <a href="mailto:&lt;mike.kuntz@boiseschools.org">&lt;mike.kuntz@boiseschools.org</a>&gt;<br/>Date: Feb 28, 2017 12:41 PM<br/>Subject: field trips<br/>To: &quot;MICHAEL KUNTZ&quot; <a href="mailto:&lt;mike.kuntz@boiseschools.org">&lt;mike.kuntz@boiseschools.org</a>&gt;<br/>Cc:</p><p>Hi Parents,<br/>   OK...one field trip on short notice and another in the not-so-distant<br/>future that I hope you can save the date and join us! Tomorrow we are going<br/>to the Capitol Building from 9:30 to noon.  We will be back in time for<br/>lunch.  You are welcom to join us on the bus, or meet up with us at the<br/>Capitol.<br/>     The other trip is on Tuesday, May 30.  That&apos;s right.....you get 3<br/>months notice! Our class will hike up to Table Rock in the morning, pack a<br/>lunch and eat at Quarry Park, then take a parent-guided scavenger hunt<br/>through the Old Penitentiary in the afternoon.  I invite you to join us for<br/>the entire day, but would love to have you for the morning OR afternoon if<br/>that works better!<br/>     We do have another field trip in May to the Basque Museum and City<br/>Hall, but the date is not yet set.<br/>Thanks!<br/>Mike</p>',
      subject: 'Fwd: field trips',
      references:
         '<CAH8Y112dv3T7zH5-AqJPpER_Ur=vnpT0amVvS1wRE_yVQ-=kow@mail.gmail.com>',
      date: '2017-02-28T22:46:35.000Z',
      to: {
         value: [{ address: 'self@trailimage.com', name: 'Dad' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Dad</span> &lt;<a href="mailto:self@trailimage.com" class="mp_address_email">self@trailimage.com</a>&gt;</span>',
         text: 'Dad <self@trailimage.com>'
      },
      from: {
         value: [{ address: 'other@trailimage.com', name: 'Other Person' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Other Person</span> &lt;<a href="mailto:other@trailimage.com" class="mp_address_email">other@trailimage.com</a>&gt;</span>',
         text: 'Other Person <other@trailimage.com>'
      },
      messageId:
         '<CAAAYr2ZWbn3vaF9YTZg+-1oxHqU8Q6SFczf8gUwqBasUNWKvSg@mail.gmail.com>',
      inReplyTo:
         '<CAH8Y112dv3T7zH5-AqJPpER_Ur=vnpT0amVvS1wRE_yVQ-=kow@mail.gmail.com>'
   },
   {
      attachments: [],
      headers: {},
      headerLines: [
         { key: 'x-gm-thrid', line: 'X-GM-THRID: 1560607108378939026' },
         { key: 'x-gmail-labels', line: 'X-Gmail-Labels: Inbox,Important' },
         { key: 'delivered-to', line: 'Delivered-To: self@trailimage.com' },
         {
            key: 'received',
            line:
               'Received: by 10.28.199.3 with SMTP id x3csp639176wmf;\r\n        Tue, 28 Feb 2017 11:41:57 -0800 (PST)'
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 10.36.34.201 with SMTP id o192mr375445ito.17.1488310917339;\r\n        Tue, 28 Feb 2017 11:41:57 -0800 (PST)'
         },
         {
            key: 'return-path',
            line: 'Return-Path: <mike.kuntz@boiseschools.org>'
         },
         {
            key: 'received',
            line:
               'Received: from mail-it0-x242.google.com (mail-it0-x242.google.com. [2607:f8b0:4001:c0b::242])\r\n        by mx.google.com with ESMTPS id r193si3219641itc.42.2017.02.28.11.41.57\r\n        for <self@trailimage.com>\r\n        (version=TLS1_2 cipher=ECDHE-RSA-AES128-GCM-SHA256 bits=128/128);\r\n        Tue, 28 Feb 2017 11:41:57 -0800 (PST)'
         },
         {
            key: 'received-spf',
            line:
               'Received-SPF: pass (google.com: domain of mike.kuntz@boiseschools.org designates 2607:f8b0:4001:c0b::242 as permitted sender) client-ip=2607:f8b0:4001:c0b::242;'
         },
         {
            key: 'authentication-results',
            line:
               'Authentication-Results: mx.google.com;\r\n       dkim=fail header.i=@boiseschools.org;\r\n       spf=pass (google.com: domain of mike.kuntz@boiseschools.org designates 2607:f8b0:4001:c0b::242 as permitted sender) smtp.mailfrom=mike.kuntz@boiseschools.org'
         },
         {
            key: 'received',
            line:
               'Received: by mail-it0-x242.google.com with SMTP id 203so2590709ith.2\r\n        for <self@trailimage.com>; Tue, 28 Feb 2017 11:41:57 -0800 (PST)'
         },
         {
            key: 'dkim-signature',
            line:
               'DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=boiseschools.org; s=google;\r\n        h=mime-version:from:date:message-id:subject:to;\r\n        bh=OqtZKLMJcbnKQdwlNseCY66LatXYZccpj2B6aNbnp+4=;\r\n        b=WBPfVlzeJAT44kV8+taJ2a9c1cbl+htu37zmeXHvsw5LYufwM96WE2YkCfLhz1JFLF\r\n         k32kGNPn+Bmhyo5eil8qoeErpeAWstSvB7iFgWEiiVgkYk111ggnv2hGly4eI0VOkt33\r\n         ko6th3NpKF3eCi9onkZkmlrzkVCw4ZGaR+GGozlymaOajtHp0G9I+U8+ZoaGillRXL8t\r\n         TQk1mBPpye2i28L3Ls9UVjazbEQRRw4NJxLPDpFxrcn2L2KnXHdpRwP5YJK4QlHsMSoi\r\n         6XFeokIlE5fhQ+Jl1j5NuNfsvnUYmgbj/k0yhDmHJravdAQGigvxmSml1ve9DYvlZ1FE\r\n         Rvsw=='
         },
         {
            key: 'x-google-dkim-signature',
            line:
               'X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=1e100.net; s=20161025;\r\n        h=x-gm-message-state:mime-version:from:date:message-id:subject:to;\r\n        bh=OqtZKLMJcbnKQdwlNseCY66LatXYZccpj2B6aNbnp+4=;\r\n        b=n4gqh7WFgNMz/fY6+sJUfbfJgA/rylxOYKdHPhtZP7/GDkTTzZAyhAHGLht5zbcvjV\r\n         UehDMn/I4tT9ni3TgGVurBRRLhVmM2FYbd5wKTG9uyrU8m/RH4xJ5ma0WqhQiJgH2hjn\r\n         Q0LGvfaTbH9VvaoAW8bijxYuVXaTi8kj7HePcFNqTrD6pz50S+20+VNJltc8IlO8Hrdn\r\n         mKWasNmRLC+YqMsuuXXnCoQ04JZeZhhEc9PtyZlxHHZ9b0ROxaL4AQqD0NI3U0ovvDG/\r\n         ZLfc0eMTZBdc6LM1c+LOxd4sCdE2Xhlw4DZQ5pBrBcuyrfrdDQYTrvxzJCHAChypbNO0\r\n         BfEg=='
         },
         {
            key: 'x-gm-message-state',
            line:
               'X-Gm-Message-State: AMke39lhIykWgmBd9hgDONTvRajviDoBHeKNRyHJfXwno1GPGosDjU1dG0bzqLjFoNnOWhSNhKq+/hnfYW6gct5q'
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 10.36.81.142 with SMTP id s136mr346237ita.119.1488310916911;\r\n Tue, 28 Feb 2017 11:41:56 -0800 (PST)'
         },
         { key: 'mime-version', line: 'MIME-Version: 1.0' },
         {
            key: 'received',
            line:
               'Received: by 10.79.37.10 with HTTP; Tue, 28 Feb 2017 11:41:56 -0800 (PST)'
         },
         {
            key: 'from',
            line: 'From: Michael Kuntz <mike.kuntz@boiseschools.org>'
         },
         { key: 'date', line: 'Date: Tue, 28 Feb 2017 12:41:56 -0700' },
         {
            key: 'message-id',
            line:
               'Message-ID: <CAH8Y112dv3T7zH5-AqJPpER_Ur=vnpT0amVvS1wRE_yVQ-=kow@mail.gmail.com>'
         },
         { key: 'subject', line: 'Subject: field trips' },
         { key: 'to', line: 'To: MICHAEL KUNTZ <mike.kuntz@boiseschools.org>' },
         {
            key: 'content-type',
            line:
               'Content-Type: multipart/alternative; boundary=001a1135b4b084b66505499c6373'
         },
         { key: 'bcc', line: 'Bcc: self@trailimage.com' }
      ],
      html:
         '<div dir="ltr">Hi Parents,<div>   OK...one field trip on short notice and another in the not-so-distant future that I hope you can save the date and join us! Tomorrow we are going to the Capitol Building from 9:30 to noon.  We will be back in time for lunch.  You are welcom to join us on the bus, or meet up with us at the Capitol.  </div><div>     The other trip is on Tuesday, May 30.  That&#39;s right.....you get 3 months notice! Our class will hike up to Table Rock in the morning, pack a lunch and eat at Quarry Park, then take a parent-guided scavenger hunt through the Old Penitentiary in the afternoon.  I invite you to join us for the entire day, but would love to have you for the morning OR afternoon if that works better!</div><div>     We do have another field trip in May to the Basque Museum and City Hall, but the date is not yet set.</div><div>Thanks!</div><div>Mike  </div></div>\n',
      text:
         "Hi Parents,\n   OK...one field trip on short notice and another in the not-so-distant\nfuture that I hope you can save the date and join us! Tomorrow we are going\nto the Capitol Building from 9:30 to noon.  We will be back in time for\nlunch.  You are welcom to join us on the bus, or meet up with us at the\nCapitol.\n     The other trip is on Tuesday, May 30.  That's right.....you get 3\nmonths notice! Our class will hike up to Table Rock in the morning, pack a\nlunch and eat at Quarry Park, then take a parent-guided scavenger hunt\nthrough the Old Penitentiary in the afternoon.  I invite you to join us for\nthe entire day, but would love to have you for the morning OR afternoon if\nthat works better!\n     We do have another field trip in May to the Basque Museum and City\nHall, but the date is not yet set.\nThanks!\nMike\n",
      textAsHtml:
         '<p>Hi Parents,<br/>   OK...one field trip on short notice and another in the not-so-distant<br/>future that I hope you can save the date and join us! Tomorrow we are going<br/>to the Capitol Building from 9:30 to noon.  We will be back in time for<br/>lunch.  You are welcom to join us on the bus, or meet up with us at the<br/>Capitol.<br/>     The other trip is on Tuesday, May 30.  That&apos;s right.....you get 3<br/>months notice! Our class will hike up to Table Rock in the morning, pack a<br/>lunch and eat at Quarry Park, then take a parent-guided scavenger hunt<br/>through the Old Penitentiary in the afternoon.  I invite you to join us for<br/>the entire day, but would love to have you for the morning OR afternoon if<br/>that works better!<br/>     We do have another field trip in May to the Basque Museum and City<br/>Hall, but the date is not yet set.<br/>Thanks!<br/>Mike</p>',
      subject: 'field trips',
      date: '2017-02-28T19:41:56.000Z',
      to: {
         value: [
            { address: 'mike.kuntz@boiseschools.org', name: 'MICHAEL KUNTZ' }
         ],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">MICHAEL KUNTZ</span> &lt;<a href="mailto:mike.kuntz@boiseschools.org" class="mp_address_email">mike.kuntz@boiseschools.org</a>&gt;</span>',
         text: 'MICHAEL KUNTZ <mike.kuntz@boiseschools.org>'
      },
      from: {
         value: [
            { address: 'mike.kuntz@boiseschools.org', name: 'Michael Kuntz' }
         ],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Michael Kuntz</span> &lt;<a href="mailto:mike.kuntz@boiseschools.org" class="mp_address_email">mike.kuntz@boiseschools.org</a>&gt;</span>',
         text: 'Michael Kuntz <mike.kuntz@boiseschools.org>'
      },
      bcc: {
         value: [{ address: 'self@trailimage.com', name: '' }],
         html:
            '<span class="mp_address_group"><a href="mailto:self@trailimage.com" class="mp_address_email">self@trailimage.com</a></span>',
         text: 'self@trailimage.com'
      },
      messageId:
         '<CAH8Y112dv3T7zH5-AqJPpER_Ur=vnpT0amVvS1wRE_yVQ-=kow@mail.gmail.com>'
   },
   {
      attachments: [],
      headers: {},
      headerLines: [
         { key: 'x-gm-thrid', line: 'X-GM-THRID: 1561965691022396695' },
         {
            key: 'x-gmail-labels',
            line: 'X-Gmail-Labels: Inbox,Important,Family/Jessica'
         },
         { key: 'delivered-to', line: 'Delivered-To: self@trailimage.com' },
         {
            key: 'received',
            line:
               'Received: by 10.28.199.3 with SMTP id x3csp429627wmf;\r\n        Wed, 15 Mar 2017 12:36:02 -0700 (PDT)'
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 10.157.8.34 with SMTP id 31mr2759445oty.24.1489606562584;\r\n        Wed, 15 Mar 2017 12:36:02 -0700 (PDT)'
         },
         { key: 'return-path', line: 'Return-Path: <other@trailimage.com>' },
         {
            key: 'received',
            line:
               'Received: from mail-ot0-x229.google.com (mail-ot0-x229.google.com. [2607:f8b0:4003:c0f::229])\r\n        by mx.google.com with ESMTPS id q58si1130602otc.298.2017.03.15.12.36.02\r\n        for <self@trailimage.com>\r\n        (version=TLS1_2 cipher=ECDHE-RSA-AES128-GCM-SHA256 bits=128/128);\r\n        Wed, 15 Mar 2017 12:36:02 -0700 (PDT)'
         },
         {
            key: 'received-spf',
            line:
               'Received-SPF: neutral (google.com: 2607:f8b0:4003:c0f::229 is neither permitted nor denied by best guess record for domain of other@trailimage.com) client-ip=2607:f8b0:4003:c0f::229;'
         },
         {
            key: 'authentication-results',
            line:
               'Authentication-Results: mx.google.com;\r\n       dkim=pass header.i=@trailimage-com.20150623.gappssmtp.com;\r\n       spf=neutral (google.com: 2607:f8b0:4003:c0f::229 is neither permitted nor denied by best guess record for domain of other@trailimage.com) smtp.mailfrom=other@trailimage.com'
         },
         {
            key: 'received',
            line:
               'Received: by mail-ot0-x229.google.com with SMTP id 19so31146592oti.0\r\n        for <self@trailimage.com>; Wed, 15 Mar 2017 12:36:02 -0700 (PDT)'
         },
         {
            key: 'dkim-signature',
            line:
               'DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=trailimage-com.20150623.gappssmtp.com; s=20150623;\r\n        h=mime-version:in-reply-to:references:from:date:message-id:subject:to;\r\n        bh=5neon9Jl8AL60SqYCliWobOziUAq0Q2yXNKel5ioTBc=;\r\n        b=sMckuCRSXoi1SS7Io3xcOomGr6tLY6b2d6Xt5J4m2xzHhyKUuyYyfhmQDWZpkRfxZJ\r\n         76fpt/OshjkmfwFXfVGgZy1blwzUmanp8C14yZPZgeinvog6L8jL4nTrp4Ic+MyFA7w4\r\n         BoMhDsLK+9LOTHTPYhg2Owv1ds+892zFRk2+J274tc3Wb6sgArDlxb9vfiLMQ5kD5b6r\r\n         edBs1rWFEZWaicTvwNr0+lCHrw8nb4V2Gi3Hx2s0Pps6UpVkRoa0/hVZ1NlJ8lx0KSqo\r\n         0BEuwEaN4NoYvSGnTMQmsPuW65E8HETWLBsmlrD4gjN9DB2ddVpRdWRJykKWE2iK51gp\r\n         RgeA=='
         },
         {
            key: 'x-google-dkim-signature',
            line:
               'X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=1e100.net; s=20161025;\r\n        h=x-gm-message-state:mime-version:in-reply-to:references:from:date\r\n         :message-id:subject:to;\r\n        bh=5neon9Jl8AL60SqYCliWobOziUAq0Q2yXNKel5ioTBc=;\r\n        b=U5nQl6zmJa9d2u+ZjQvGWe2hAvgCRnHdqPyCmw6dfC3ROlJHHYvom6ch9J8pFKBGIs\r\n         1pdMDR7REt3qGachpp4V6cEaogJ+fEkEMp0WfM5WCIMNVqv5N3LPVLBfKNlvDeZrkG74\r\n         9l5y8XfY+6OE0YMi7XL92KeXBKsig9nJZ7FRP+8FPUSG+EL2rMbrMdDLHOBuWnaDjoLn\r\n         DWGq2ajjFjeaBYQ9LxXk8bfJhmsKLhg9g5uWHZ7w/MN/MJvSxDHbfB4Ok7LwQwmENbDz\r\n         5ZVW6yhwdXYi9PKsRBScmyUHbO/4uv63lUPJALy3jFq1qWs9po77QVQSPdL4uF26Vr2V\r\n         ET+Q=='
         },
         {
            key: 'x-gm-message-state',
            line:
               'X-Gm-Message-State: AFeK/H37v7LVoctMhXOJB6jqVeziuMWAd9GR8/5paS7+QVh2oBNkGLcE+lOODczkQoyMSsDgwMi/7XuPejnOBA=='
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 10.157.15.147 with SMTP id d19mr2300920otd.233.1489606562093;\r\n Wed, 15 Mar 2017 12:36:02 -0700 (PDT)'
         },
         { key: 'mime-version', line: 'MIME-Version: 1.0' },
         {
            key: 'received',
            line:
               'Received: by 10.157.50.11 with HTTP; Wed, 15 Mar 2017 12:36:01 -0700 (PDT)'
         },
         {
            key: 'x-originating-ip',
            line: 'X-Originating-IP: [2600:100e:b145:1f65:366a:e40d:e266:3c40]'
         },
         {
            key: 'received',
            line:
               'Received: by 10.157.50.11 with HTTP; Wed, 15 Mar 2017 12:36:01 -0700 (PDT)'
         },
         {
            key: 'in-reply-to',
            line:
               'In-Reply-To: <CAAAYr2ZUV=VjFF9JOemUZYEjQ5L5V_3BhdnOnd9+ehJ3Q=AdAA@mail.gmail.com>'
         },
         {
            key: 'references',
            line:
               'References: <CAEebnpg+iW=hg=aubuy9AuVxyXbYpX+91C-wpap-zma8nbG=Rg@mail.gmail.com>\r\n <CAAAYr2ZUV=VjFF9JOemUZYEjQ5L5V_3BhdnOnd9+ehJ3Q=AdAA@mail.gmail.com>'
         },
         { key: 'from', line: 'From: Other Person <other@trailimage.com>' },
         { key: 'date', line: 'Date: Wed, 15 Mar 2017 13:36:01 -0600' },
         {
            key: 'message-id',
            line:
               'Message-ID: <CAAAYr2ZPgWPdurSaJwjC_1KowPcc0_eH973Oo-9PYQx9ZVaATA@mail.gmail.com>'
         },
         { key: 'subject', line: 'Subject: Fwd: phone' },
         { key: 'to', line: 'To: Dad <self@trailimage.com>' },
         {
            key: 'content-type',
            line:
               'Content-Type: multipart/alternative; boundary=001a113d196afd30b1054aca0deb'
         }
      ],
      html:
         '<div dir="auto">😄</div><div class="gmail_quote">---------- Forwarded message ----------<br>From: &quot;Lisa Ennis&quot; &lt;<a href="mailto:lisa.ennis@boiseschools.org">lisa.ennis@boiseschools.org</a>&gt;<br>Date: Mar 15, 2017 1:29 PM<br>Subject: phone<br>To: &quot;Other Person&quot; &lt;<a href="mailto:other@trailimage.com">other@trailimage.com</a>&gt;<br>Cc: <br><br type="attribution"><blockquote class="quote" style="margin:0 0 0 .8ex;border-left:1px #ccc solid;padding-left:1ex"><div dir="ltr">Hey Jessica, <div>Col. Wallinger from ROTC took Hunter&#39;s phone away.  I have it in my office. How would you like it given back? <font color="#888888"><br clear="all"><div><br></div>-- <br><div class="m_-408641584482242643gmail_signature" data-smartmail="gmail_signature"><div dir="ltr"><div><div dir="ltr">Lisa Ennis, MA. </div><div dir="ltr"><span style="font-size:12.8px">Counselor</span></div><div dir="ltr">Timberline High School (R-Z and AVID)</div><div dir="ltr"><a href="tel:(208)%20854-6242" value="+12088546242" target="_blank">(208)854-6242</a><br><div><br></div></div></div></div></div>\n</font></div></div>\n</blockquote></div><br>\n',
      text:
         '😄\n---------- Forwarded message ----------\nFrom: "Lisa Ennis" <lisa.ennis@boiseschools.org>\nDate: Mar 15, 2017 1:29 PM\nSubject: phone\nTo: "Other Person" <other@trailimage.com>\nCc:\n\nHey Jessica,\nCol. Wallinger from ROTC took Hunter\'s phone away.  I have it in my office.\nHow would you like it given back?\n\n-- \nLisa Ennis, MA.\nCounselor\nTimberline High School (R-Z and AVID)\n(208)854-6242 <(208)%20854-6242>\n',
      textAsHtml:
         '<p>&#x1F604;<br/>---------- Forwarded message ----------<br/>From: &quot;Lisa Ennis&quot; <a href="mailto:&lt;lisa.ennis@boiseschools.org">&lt;lisa.ennis@boiseschools.org</a>&gt;<br/>Date: Mar 15, 2017 1:29 PM<br/>Subject: phone<br/>To: &quot;Other Person&quot; <a href="mailto:&lt;other@trailimage.com">&lt;other@trailimage.com</a>&gt;<br/>Cc:</p><p>Hey Jessica,<br/>Col. Wallinger from ROTC took Hunter&apos;s phone away.  I have it in my office.<br/>How would you like it given back?</p><p>--<br/>Lisa Ennis, MA.<br/>Counselor<br/>Timberline High School (R-Z and AVID)<br/>(208)854-6242 &lt;(208)%20854-6242&gt;</p>',
      subject: 'Fwd: phone',
      references: [
         '<CAEebnpg+iW=hg=aubuy9AuVxyXbYpX+91C-wpap-zma8nbG=Rg@mail.gmail.com>',
         '<CAAAYr2ZUV=VjFF9JOemUZYEjQ5L5V_3BhdnOnd9+ehJ3Q=AdAA@mail.gmail.com>'
      ],
      date: '2017-03-15T19:36:01.000Z',
      to: {
         value: [{ address: 'self@trailimage.com', name: 'Dad' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Dad</span> &lt;<a href="mailto:self@trailimage.com" class="mp_address_email">self@trailimage.com</a>&gt;</span>',
         text: 'Dad <self@trailimage.com>'
      },
      from: {
         value: [{ address: 'other@trailimage.com', name: 'Other Person' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Other Person</span> &lt;<a href="mailto:other@trailimage.com" class="mp_address_email">other@trailimage.com</a>&gt;</span>',
         text: 'Other Person <other@trailimage.com>'
      },
      messageId:
         '<CAAAYr2ZPgWPdurSaJwjC_1KowPcc0_eH973Oo-9PYQx9ZVaATA@mail.gmail.com>',
      inReplyTo:
         '<CAAAYr2ZUV=VjFF9JOemUZYEjQ5L5V_3BhdnOnd9+ehJ3Q=AdAA@mail.gmail.com>'
   },
   {
      attachments: [],
      headers: {},
      headerLines: [
         { key: 'x-gm-thrid', line: 'X-GM-THRID: 1590423027902432110' },
         {
            key: 'x-gmail-labels',
            line: 'X-Gmail-Labels: Inbox,Important,Family/Jessica'
         },
         { key: 'delivered-to', line: 'Delivered-To: self@trailimage.com' },
         {
            key: 'received',
            line:
               'Received: by 10.200.10.194 with SMTP id g2csp4811407qti;\r\n        Tue, 23 Jan 2018 14:13:14 -0800 (PST)'
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 10.84.67.146 with SMTP id u18mr7630296oiv.210.1516745594432;\r\n        Tue, 23 Jan 2018 14:13:14 -0800 (PST)'
         },
         {
            key: 'arc-seal',
            line:
               'ARC-Seal: i=1; a=rsa-sha256; t=1516745594; cv=none;\r\n        d=google.com; s=arc-20160816;\r\n        b=cRyyQg6FlbY+271BstOsB0rHsUzEdXpoYNtAW4vkf5gro66Qt1on6eAHfS/lvg8HiH\r\n         86mxv/Z69hORTv340h8je9H4F6jJukAD7DT85UOnIne+iMs0S74RNSdyAjZCrVUVa/yF\r\n         Y8h1kKERx4uemiLc/3Zn6r0FYJ2nF9Urf0HOCBPomU6mscybJ3qvM6PSWm1yZb2Nlnio\r\n         fK4NnNjzk9+YuvlRBOM0oGJYXw1jCx3ASk/hc4CDmdzC+3hT5v6NIsV+do0xSb4pVXYP\r\n         arbN4fq+CkqHp/+aFfGryWXaXEgWPT4pxyGS5O4iGB33GK0xQzYu9MWLWgeDetMCu+32\r\n         NfcQ=='
         },
         {
            key: 'arc-message-signature',
            line:
               'ARC-Message-Signature: i=1; a=rsa-sha256; c=relaxed/relaxed; d=google.com; s=arc-20160816;\r\n        h=to:subject:message-id:date:from:references:in-reply-to:mime-version\r\n         :dkim-signature:arc-authentication-results;\r\n        bh=Y5P+mB6AZIW+/tO+9gf8g3bWEdhlN4iNDhzO/3D+rGI=;\r\n        b=F/u5H4z8QQTEQixzBO3YfWBZSoXUvGb+uLTk8dXugrDx+jWSMlHSETrM6asPNt6idH\r\n         MIm9kOVjt+aAWCnOl4EWDv9qnTH15QsYQ1dYEuB2yK2jAsFImRRByxzhlMS7Ur1eVp+7\r\n         YWCpgqMvPHGfsfAFvHE5e5G9Nh3q5t/gy/m53Omjemy1QnGzq/ufIvlkxn8xf8AtEmub\r\n         o33HpJq1CFlXZ4It6F2wp9U94wzX0xRk4GEB7BsvKPvFCkj9tGYJtDgufXwdetRGF+NE\r\n         cVXDCg+PM7/pYMmv/OO6xQLvE/SziFSpsfsucg7KWiueGry9sTM2wEcyk0W/Pvuszqso\r\n         Euaw=='
         },
         {
            key: 'arc-authentication-results',
            line:
               'ARC-Authentication-Results: i=1; mx.google.com;\r\n       dkim=pass header.i=@trailimage-com.20150623.gappssmtp.com header.s=20150623 header.b=d5SUqSRV;\r\n       spf=neutral (google.com: 209.85.220.41 is neither permitted nor denied by best guess record for domain of other@trailimage.com) smtp.mailfrom=other@trailimage.com'
         },
         { key: 'return-path', line: 'Return-Path: <other@trailimage.com>' },
         {
            key: 'received',
            line:
               'Received: from mail-sor-f41.google.com (mail-sor-f41.google.com. [209.85.220.41])\r\n        by mx.google.com with SMTPS id 205sor1423076oib.101.2018.01.23.14.13.13\r\n        for <self@trailimage.com>\r\n        (Google Transport Security);\r\n        Tue, 23 Jan 2018 14:13:14 -0800 (PST)'
         },
         {
            key: 'received-spf',
            line:
               'Received-SPF: neutral (google.com: 209.85.220.41 is neither permitted nor denied by best guess record for domain of other@trailimage.com) client-ip=209.85.220.41;'
         },
         {
            key: 'authentication-results',
            line:
               'Authentication-Results: mx.google.com;\r\n       dkim=pass header.i=@trailimage-com.20150623.gappssmtp.com header.s=20150623 header.b=d5SUqSRV;\r\n       spf=neutral (google.com: 209.85.220.41 is neither permitted nor denied by best guess record for domain of other@trailimage.com) smtp.mailfrom=other@trailimage.com'
         },
         {
            key: 'dkim-signature',
            line:
               'DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=trailimage-com.20150623.gappssmtp.com; s=20150623;\r\n        h=mime-version:in-reply-to:references:from:date:message-id:subject:to;\r\n        bh=Y5P+mB6AZIW+/tO+9gf8g3bWEdhlN4iNDhzO/3D+rGI=;\r\n        b=d5SUqSRVaGG/uXcvXF8r9BnQUs5TQWzHycGc3y6s5Xlfa1Cl6/SUkv9AAuNRDmqIBw\r\n         xrLNc9PESlbfz8DtZMGZ8K1qhUNJ86fTIoW+XhkTSko6HvBSfPE0iKhTJrV6DXB5nmkZ\r\n         IU0oNcDK8om+o7ajWT5gwAZcoWyAFl+ax/7mCQU3mdbQTPyyjPB/9XPfyee/iJVpKd/H\r\n         Tq+hSgQTp/taOOtzNUxYqhJs/xWZ0qpDSI6SZOAwAqUlQKxSnzWlPAgiNA+PnbDDYKkQ\r\n         UMjPHdeT9Z5+keXg8huRNJTAN/EQpQYo3t/jN45Tpi+VZxiEG5wPylk4mb+HcsELyzG9\r\n         pLKw=='
         },
         {
            key: 'x-google-dkim-signature',
            line:
               'X-Google-DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed;\r\n        d=1e100.net; s=20161025;\r\n        h=x-gm-message-state:mime-version:in-reply-to:references:from:date\r\n         :message-id:subject:to;\r\n        bh=Y5P+mB6AZIW+/tO+9gf8g3bWEdhlN4iNDhzO/3D+rGI=;\r\n        b=RQcl5z04OvTSpjTWWO/+aNl195Qy9+fOqQ6RHJlrULfnriD12pbRWE4RQPYJ0duxb+\r\n         t0j0uDBCAKRomcP30N59iWmpbOqZKJMqrR0mRyXvzi5ZIl5X9eOromF9yctU433SAGhE\r\n         u4sqcgT41wFYsHd44cxfv+vn4yecQgODU4roYrwPbVJcCT6gvPS+E37yk1wHdxwZ2VNO\r\n         QXvpmwbigcCuzNVxwhAzYx5yG30J8zwQ3wSYc99ceEBYlJFQTiUEYocg1UMq5i6a3/9J\r\n         0R347kaXxFgjvM8VblQpeL6bdy91u02uTona110nl/fQr+dYKslKbF3PBuYnh5Q9ZYPU\r\n         9Vtw=='
         },
         {
            key: 'x-gm-message-state',
            line:
               'X-Gm-Message-State: AKwxytcgnHq7gJ4vJibDY181D8Sy4exblGnjZ+xgvLJ3Xgouv2BSq9IY\r\n\tCakcDw8u+GVK9ZU+3DVFT0Ur2has5M7KYVAVPpyhUctg'
         },
         {
            key: 'x-google-smtp-source',
            line:
               'X-Google-Smtp-Source: AH8x2261AEsEobpM8sr6ogmBITqX2dRUj59l9vksfKZLcJWtIxQJyj3ngaGfEP8V2uduCsqBuUMuXZVM1L4HUSluXSM='
         },
         {
            key: 'x-received',
            line:
               'X-Received: by 10.202.204.23 with SMTP id c23mr7586795oig.0.1516745593175;\r\n Tue, 23 Jan 2018 14:13:13 -0800 (PST)'
         },
         { key: 'mime-version', line: 'MIME-Version: 1.0' },
         {
            key: 'received',
            line:
               'Received: by 10.157.68.115 with HTTP; Tue, 23 Jan 2018 14:13:12 -0800 (PST)'
         },
         {
            key: 'x-originating-ip',
            line: 'X-Originating-IP: [104.129.192.101]'
         },
         {
            key: 'in-reply-to',
            line: 'In-Reply-To: <SHA20LQET7ffSsnuvPY00756347@mail.sfly.com>'
         },
         {
            key: 'references',
            line: 'References: <SHA20LQET7ffSsnuvPY00756347@mail.sfly.com>'
         },
         { key: 'from', line: 'From: Other Person <other@trailimage.com>' },
         { key: 'date', line: 'Date: Tue, 23 Jan 2018 15:13:12 -0700' },
         {
            key: 'message-id',
            line:
               'Message-ID: <CAAAYr2bPwV+V3W5bpx1rZ=+9Op-CO226C_Ha-=okaqDZ6hu2BQ@mail.gmail.com>'
         },
         {
            key: 'subject',
            line:
               'Subject: =?UTF-8?Q?Fwd=3A_An_event_has_been_updated_on_the_=E2=80=9CWings_Gymna?=\r\n\t=?UTF-8?Q?stics=E2=80=9D_site?='
         },
         { key: 'to', line: 'To: Self Person <self@trailimage.com>' },
         {
            key: 'content-type',
            line:
               'Content-Type: multipart/alternative; boundary="001a1134e4e04bd4f2056378da05"'
         }
      ],
      html:
         '<div dir="ltr"><br clear="all"><div><div class="gmail_signature" data-smartmail="gmail_signature"><div dir="ltr"><div dir="ltr"><div dir="ltr"><div dir="ltr"><div dir="ltr"><div><font face="arial narrow, sans-serif" size="4">So we need to get this one figured out soon. She competes at 8am Saturday in Portland. I fly in from L.A. Friday evening. We need to figure out where we are staying, if you guys are driving/flying there etc. </font></div><div><font face="arial narrow, sans-serif" size="4"><br></font></div><div><span></span></div></div></div></div></div></div></div></div>\n<br><div class="gmail_quote">---------- Forwarded message ----------<br>From: <b class="gmail_sendername">Wings  G</b> <span dir="ltr">&lt;<a href="mailto:noreply@sfly.com">noreply@sfly.com</a>&gt;</span><br>Date: Tue, Jan 23, 2018 at 1:31 PM<br>Subject: An event has been updated on the “Wings Gymnastics” site<br>To: Other Person &lt;<a href="mailto:other@trailimage.com">other@trailimage.com</a>&gt;<br><br><br>\n\n\n<div>\n<div class="m_-2809426479987521880email-body" style="font:13px verdana,arial,geneva,sans-serif;color:#666666;line-height:140%"><table style="width:100%;border-bottom:1px solid #181512">\n<tbody><tr valign="bottom">\n<td style="padding-bottom:12px;white-space:nowrap">\n<div>Event Update from “Wings Gymnastics” Site</div>\n</td>\n<td align="right" style="padding-bottom:4px;white-space:nowrap"><a style="color:#6666cc;font-family:Arial,Geneva,sans-serif;font-size:11px" href="http://site.shutterfly.com/commands/email/spam?m=sha20-1516739472-32" target="_blank">Report this email as spam</a>\n<div style="height:20px;line-height:20px"> </div><img border="0" width="125" height="42" src="http://cdn.staticsfly.com/shr/images/email/sfly_logo_125x42.png" alt="Shutterfly logo" align="bottom"></td>\n</tr>\n</tbody></table><p>Wings  G updated the following event on “Wings Gymnastics” site. Here are the details:</p><table cellpadding="3" cellspacing="0"><tbody><tr><td valign="top" align="right" style="font:13px verdana,arial;color:#666"><b>Event:</b></td><td valign="top" style="font:13px verdana,arial;color:#666">Rose City Challenge <a href="https://wingsgymnastics.shutterfly.com/calendar/3" target="_blank">View event</a></td></tr> <tr><td valign="top" align="right" style="font:13px verdana,arial;color:#666"><b>Date/Time:</b></td><td valign="top" style="font:13px verdana,arial;color:#666">Feb 24, 2018 12:00am to 12:00am</td></tr>     <tr><td valign="top" align="right" style="font:13px verdana,arial;color:#666"><b>Address:</b></td><td valign="top" style="font:13px verdana,arial;color:#666">Portland, OR <a href="//maps.google.com/?q=Portland%2C%20OR" title="View map" target="_blank"><span class="m_-2809426479987521880font-sys">[Map]</span></a></td></tr>   <tr><td valign="top" align="right" style="font:13px verdana,arial;color:#666"><b>Notes:</b></td><td valign="top" style="font:13px verdana,arial;color:#666"><div>     Level 4 (travel): 8:00 AM</div><div>     Level 5 (travel): 11:30 AM</div><div>     Level 6/7: 2:30 PM</div><div>     Level 8/9: 6:00 PM</div><div><br></div></td></tr></tbody></table><p>From, <br>Wings  G</p> <a style="border:0;text-decoration:none" link="View site" href="http://wingsgymnastics.shutterfly.com/#%3aemid%3dsite_calendarimmediatenotification%26cid%3dSHARE3SXXXX" target="_blank"><img src="http://cdn.staticsfly.com/shr/images/email/view-site.png" alt="View site" border="0"></a>\n\n<div style="height:20px;line-height:20px"> </div>\n<div>\n<b>Site Name:</b> Wings Gymnastics<br>\n<b>Site URL:</b> <a href="https://wingsgymnastics.shutterfly.com/#%3aemid%3dsite_send%26cid%3dSHARE3SXXXX" target="_blank">https://wingsgymnastics.<wbr>shutterfly.com/</a><br>\n</div>\n\n<div style="height:25px;line-height:25px"> </div>\n<ul style="margin-top:0;margin-bottom:0">\n\n</ul><img alt="" src="https://os.shutterfly.com/b/ss/sflyemailprod/1/H.15/111?pageName=send&amp;v0=SHARE3SMAIL" width="1" height="1" border="0"></div>\n</div>\n    \n\n\n\n\n</div><br></div>\n',
      text:
         'So we need to get this one figured out soon. She competes at 8am Saturday\nin Portland. I fly in from L.A. Friday evening. We need to figure out where\nwe are staying, if you guys are driving/flying there etc.\n\n\n---------- Forwarded message ----------\nFrom: Wings G <noreply@sfly.com>\nDate: Tue, Jan 23, 2018 at 1:31 PM\nSubject: An event has been updated on the “Wings Gymnastics” site\nTo: Other Person <other@trailimage.com>\n\n\nEvent Update from “Wings Gymnastics” Site\nReport this email as spam\n<http://site.shutterfly.com/commands/email/spam?m=sha20-1516739472-32>\n\n[image: Shutterfly logo]\n\nWings G updated the following event on “Wings Gymnastics” site. Here are\nthe details:\n*Event:* Rose City Challenge View event\n<https://wingsgymnastics.shutterfly.com/calendar/3>\n*Date/Time:* Feb 24, 2018 12:00am to 12:00am\n*Address:* Portland, OR [Map] <//maps.google.com/?q=Portland%2C%20OR>\n*Notes:*\n     Level 4 (travel): 8:00 AM\n     Level 5 (travel): 11:30 AM\n     Level 6/7: 2:30 PM\n     Level 8/9: 6:00 PM\n\nFrom,\nWings G\n[image: View site]\n<http://wingsgymnastics.shutterfly.com/#%3aemid%3dsite_calendarimmediatenotification%26cid%3dSHARE3SXXXX>\n\n*Site Name:* Wings Gymnastics\n*Site URL:* https://wingsgymnastics.shutterfly.com/\n<https://wingsgymnastics.shutterfly.com/#%3aemid%3dsite_send%26cid%3dSHARE3SXXXX>\n',
      textAsHtml:
         '<p>So we need to get this one figured out soon. She competes at 8am Saturday<br/>in Portland. I fly in from L.A. Friday evening. We need to figure out where<br/>we are staying, if you guys are driving/flying there etc.</p><p>---------- Forwarded message ----------<br/>From: Wings G <a href="mailto:&lt;noreply@sfly.com">&lt;noreply@sfly.com</a>&gt;<br/>Date: Tue, Jan 23, 2018 at 1:31 PM<br/>Subject: An event has been updated on the &ldquo;Wings Gymnastics&rdquo; site<br/>To: Other Person <a href="mailto:&lt;other@trailimage.com">&lt;other@trailimage.com</a>&gt;</p><p>Event Update from &ldquo;Wings Gymnastics&rdquo; Site<br/>Report this email as spam<br/>&lt;<a href="http://site.shutterfly.com/commands/email/spam?m=sha20-1516739472-32&gt;">http://site.shutterfly.com/commands/email/spam?m=sha20-1516739472-32&gt;</a></p><p>[image: Shutterfly logo]</p><p>Wings G updated the following event on &ldquo;Wings Gymnastics&rdquo; site. Here are<br/>the details:<br/>*Event:* Rose City Challenge View event<br/>&lt;<a href="https://wingsgymnastics.shutterfly.com/calendar/3&gt;">https://wingsgymnastics.shutterfly.com/calendar/3&gt;</a><br/>*Date/Time:* Feb 24, 2018 12:00am to 12:00am<br/>*Address:* Portland, OR [Map] &lt;<a href="//maps.google.com/?q=Portland%2C%20OR&gt;">//maps.google.com/?q=Portland%2C%20OR&gt;</a><br/>*Notes:*<br/>     Level 4 (travel): 8:00 AM<br/>     Level 5 (travel): 11:30 AM<br/>     Level 6/7: 2:30 PM<br/>     Level 8/9: 6:00 PM</p><p>From,<br/>Wings G<br/>[image: View site]<br/>&lt;<a href="http://wingsgymnastics.shutterfly.com/#%3aemid%3dsite_calendarimmediatenotification%26cid%3dSHARE3SXXXX&gt;">http://wingsgymnastics.shutterfly.com/#%3aemid%3dsite_calendarimmediatenotification%26cid%3dSHARE3SXXXX&gt;</a></p><p>*Site Name:* Wings Gymnastics<br/>*Site URL:* <a href="https://wingsgymnastics.shutterfly.com/">https://wingsgymnastics.shutterfly.com/</a><br/>&lt;<a href="https://wingsgymnastics.shutterfly.com/#%3aemid%3dsite_send%26cid%3dSHARE3SXXXX&gt;">https://wingsgymnastics.shutterfly.com/#%3aemid%3dsite_send%26cid%3dSHARE3SXXXX&gt;</a></p>',
      subject: 'Fwd: An event has been updated on the “Wings Gymnastics” site',
      references: '<SHA20LQET7ffSsnuvPY00756347@mail.sfly.com>',
      date: '2018-01-23T22:13:12.000Z',
      to: {
         value: [{ address: 'self@trailimage.com', name: 'Self Person' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Self Person</span> &lt;<a href="mailto:self@trailimage.com" class="mp_address_email">self@trailimage.com</a>&gt;</span>',
         text: 'Self Person <self@trailimage.com>'
      },
      from: {
         value: [{ address: 'other@trailimage.com', name: 'Other Person' }],
         html:
            '<span class="mp_address_group"><span class="mp_address_name">Other Person</span> &lt;<a href="mailto:other@trailimage.com" class="mp_address_email">other@trailimage.com</a>&gt;</span>',
         text: 'Other Person <other@trailimage.com>'
      },
      messageId:
         '<CAAAYr2bPwV+V3W5bpx1rZ=+9Op-CO226C_Ha-=okaqDZ6hu2BQ@mail.gmail.com>',
      inReplyTo: '<SHA20LQET7ffSsnuvPY00756347@mail.sfly.com>'
   }
];
