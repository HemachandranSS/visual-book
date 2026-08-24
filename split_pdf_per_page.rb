# require "combine_pdf"
# require "fileutils"

# def split_pdf(
#   pdf_path = "./tmp/Scientists_-_Dorling_Kindersley.pdf",
#   output_dir = "./Scientists_-_Dorling_Kindersley"
# )
#   FileUtils.mkdir_p(output_dir)

#   pdf = CombinePDF.load(pdf_path)

#   pdf.pages.each_with_index do |page, index|
#     page_number = index + 1
#     output_path = File.join(output_dir, "#{page_number}.pdf")

#     new_pdf = CombinePDF.new
#     new_pdf << page
#     new_pdf.save(output_path)

#     puts "Created #{output_path}"
#   end

#   puts "Done! #{pdf.pages.length} pages created."
# end

# split_pdf

#--------------------------------------------------------

require "hexapdf"
require "fileutils"

def split_pdf(
  pdf_path = "./tmp/First_Animal_Encyclopedia_-_DK.pdf",
  output_dir = "./books/visual-books/First_Animal_Encyclopedia_-_DK"
)
  FileUtils.mkdir_p(output_dir)

  pdf = HexaPDF::Document.open(pdf_path)

  pdf.pages.each_with_index do |page, index|
    page_number = index + 1
    output_path = File.join(output_dir, "#{page_number}.pdf")

    new_pdf = HexaPDF::Document.new

    new_page = new_pdf.import(page)
    new_pdf.pages.add(new_page)

    new_pdf.write(output_path)

    puts "Created #{page_number}.pdf"
  end

  puts "Done! #{pdf.pages.count} pages created."
end

split_pdf